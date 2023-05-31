import Home from "./routes/home/home.component"
import {Routes, Route} from "react-router-dom";
import Navigation from "./routes/navigation/Navigation.component";
import Authentication from "./routes/authentication/authentication.component"
import Shop from "./routes/shop/shop.component";
import Checkout from "./components/checkout/checkout.component";
import {useEffect} from "react";
import {onAuthStateChangedListener, createUserDocumentFromAuth} from "./utils/firebase/firebase.utils";
import {setCurrnetUser} from "./store/user/user.action";
import {useDispatch} from "react-redux";

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            dispatch(setCurrnetUser(user));
        })
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