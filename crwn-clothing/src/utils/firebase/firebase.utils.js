import {initializeApp} from "firebase/app";
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB6fP40AOI9e9EoKD1-JJBm_vy9hhoMZnY",
    authDomain: "crwn-clothing-db-83ebb.firebaseapp.com",
    projectId: "crwn-clothing-db-83ebb",
    storageBucket: "crwn-clothing-db-83ebb.appspot.com",
    messagingSenderId: "271764121901",
    appId: "1:271764121901:web:f0ea91bf95dd496253cba4"
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const SignInWithGooglePopup = () => signInWithPopup(auth, provider);