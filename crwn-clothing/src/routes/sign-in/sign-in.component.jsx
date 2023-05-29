import {
    auth,
    SignInWithGooglePopup,
    signinWithGoogleRedirect,
    createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils"
import {getRedirectResult} from "firebase/auth";
import {useEffect} from "react";
import SignupForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
    useEffect(() => {
        asyncCall();
    }, [])

    const asyncCall = async () => {
        const response = await getRedirectResult(auth);
        if(response){
            const userDocRef = await createUserDocumentFromAuth(response.user);
        }
    }

    const logGoogleUser = async () => {
        const {user} = await SignInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Sign In With Google</button>
            <SignupForm/>
        </div>
    )
}

export default SignIn;