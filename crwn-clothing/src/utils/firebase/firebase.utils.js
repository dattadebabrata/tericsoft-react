import {initializeApp} from "firebase/app";
import {getAuth, signInWithRedirect, signInWithPopup, createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider} from "firebase/auth";
import {getFirestore,doc,getDoc,setDoc} from "firebase/firestore";

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
export const signinWithGoogleRedirect  = () => signInWithRedirect(auth, provider);
export const db = getFirestore();
export const createUserDocumentFromAuth=async(userAuth, additionalInformation={})=>{
    const userDocRef=doc(db, "users", userAuth.uid);
    console.log(userDocRef)

    const userSnapshot=await getDoc(userDocRef);
    console.log(userSnapshot)
    console.log(userSnapshot.exists())

    //if user data does not exist
    if(!userSnapshot.exists()){
        const {displayName, email}=userAuth;
        const createdAt=new Date();

        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        }catch (error){
            console.log("error creating the user",error.message)
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
}