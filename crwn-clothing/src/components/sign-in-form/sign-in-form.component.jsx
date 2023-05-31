import {useState} from "react";
import {
    SignInWithGooglePopup,
    signInAuthUserWithEmailAndPassword,
    createAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils"
import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles.scss';
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";

const defaultFormFields = {
    email: "",
    password: "",
}
const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        await SignInWithGooglePopup();
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case "auth/wrong-password":
                    alert("incorrect password for email");
                    break;
                case "auth/user-not-found":
                    alert("no user associated with this email");
                    break;
                default:
                    console.log(error);
            }
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    return (
        <div className={"sign-up-container"}>
            <h2>Already have an account?</h2>
            <span>Sign In with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label={"Email"} type="email" name={"email"} value={email} onChange={handleChange} required/>
                <FormInput label={"Password"} type="password" name={"password"} value={password} onChange={handleChange}
                           required/>
                <div className="btn-container">
                    <Button type={"submit"}>SignIn</Button>
                    <Button buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google SignIn</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;