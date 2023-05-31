import {createContext, useEffect, useReducer} from "react";
import {onAuthStateChangedListener, createUserDocumentFromAuth} from "../utils/firebase/firebase.utils";
import {createAction} from "../utils/reducer/reducer.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserActionTypes = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const userReducer = (state, action) => {
    // console.log("state", state);
    // console.log("Dispatched")
    // console.log("action", action);
    const {type, payload} = action;

    switch (type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload,
            }
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
    }
}

const INITIAL_STATE = {
    currentUser: null,
}

export const UserProvider = ({children}) => {
    const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE);
    // console.log('currentUser', currentUser);
    const setCurrentUser = (user) => dispatch(createAction(UserActionTypes.SET_CURRENT_USER, user));
    const value = {currentUser, setCurrentUser};
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            // console.log(user)
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user)
        })
    }, []);

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}