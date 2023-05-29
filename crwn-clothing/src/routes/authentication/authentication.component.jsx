import {
    auth,
    SignInWithGooglePopup,
    signinWithGoogleRedirect,
    createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils"
import {getRedirectResult} from "firebase/auth";
import {useEffect} from "react";
import SignupForm from "../../components/sign-up-form/sign-up-form.component";
import SigninForm from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";

const Authentication = () => {
    useEffect(() => {
        asyncCall();
    }, [])

    const asyncCall = async () => {
        const response = await getRedirectResult(auth);
        if(response){
            const userDocRef = await createUserDocumentFromAuth(response.user);
        }
    }


    return (
        <div className={"authentication-container"}>
            <SigninForm/>
            <SignupForm/>
        </div>
    )
}

export default Authentication;