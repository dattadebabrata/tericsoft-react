import {Outlet,Link} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../../context/user.contexts";
import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";
import {signOutUser} from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import {CartContext} from "../../context/cart-context";
import './navigation.styles.scss'
const Navigation = () => {
    const {currentUser}=useContext(UserContext);
    const {isCartOpen}=useContext(CartContext);
    return(
        <>
            <div className={"navigation"}>
                <Link className="logo-container" to={"/"}>
                    <CrwnLogo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to={"/shop"}>Shop</Link>
                    {currentUser ? (
                        <span className="nav-link" onClick={signOutUser}>Sign Out</span>
                    ):(
                    <Link className="nav-link" to={"/auth"}>Sign In</Link>
                    )}
                    <CartIcon/>
                </div>
                {isCartOpen &&<CartDropdown/>}
            </div>
            <Outlet/>
        </>
    )
}

export default Navigation;