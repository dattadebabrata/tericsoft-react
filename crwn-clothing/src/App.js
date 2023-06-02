import Home from "./routes/home/home.component"
import {Routes, Route} from "react-router-dom";
import Navigation from "./routes/navigation/Navigation.component";
import Authentication from "./routes/authentication/authentication.component"
import Shop from "./routes/shop/shop.component";
import Checkout from "./components/checkout/checkout.component";
import {useEffect} from "react";
import {onAuthStateChangedListener, createUserDocumentFromAuth} from "./utils/firebase/firebase.utils";
// import {setCurrnetUser} from "./store/user/user.action";
import {setCurrentUser} from "./store/user/user.reducer";
import {useDispatch} from "react-redux";
import {getCurrentUser} from "./utils/firebase/firebase.utils";
// import {checkUserSession} from "./store/user/user.action";

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            const pickedUser = user && (({accessToken, email}) => ({accessToken, email}))(user)
            console.log(setCurrentUser(pickedUser))
            dispatch(setCurrentUser(pickedUser));
        });
        return unsubscribe;
    }, []);
    return (
        <Routes>
            <Route path="/" element={<Navigation/>}>
                <Route index element={<Home/>}/>
                <Route path="shop/*" element={<Shop/>}/>
                <Route path="auth" element={<Authentication/>}/>
                <Route path="checkout" element={<Checkout/>}/>
            </Route>
        </Routes>
    )
}
export default App