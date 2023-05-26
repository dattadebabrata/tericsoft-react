import {SignInWithGooglePopup} from "../../utils/firebase/firebase.utils"
const SignIn=()=>{
    const logGoogleUser=async()=>{
        const response=await SignInWithGooglePopup();
        console.log(response);
    }
    return(
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Sign In With Google</button>
        </div>
    )
}

export default SignIn;