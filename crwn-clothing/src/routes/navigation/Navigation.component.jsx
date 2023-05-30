import {Outlet, Link} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../../context/user.contexts";
import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";
import {signOutUser} from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import {CartContext} from "../../context/cart-context";
import {NavigationContainer, LogoContainer, NavLinks, NavLink} from './navigation.styles';

const Navigation = () => {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);
    return (
        <>
            <NavigationContainer>
                <LogoContainer to={"/"}>
                    <CrwnLogo className="logo"/>
                </LogoContainer>
                <NavLinks>
                    <NavLink to={"/shop"}>Shop</NavLink>
                    {currentUser ? (
                        <NavLink as="span" onClick={signOutUser}>Sign Out</NavLink>
                    ) : (
                        <NavLink to={"/auth"}>Sign In</NavLink>
                    )}
                    <CartIcon/>
                </NavLinks>
                {isCartOpen && <CartDropdown/>}
            </NavigationContainer>
            <Outlet/>
        </>
    )
}

export default Navigation;