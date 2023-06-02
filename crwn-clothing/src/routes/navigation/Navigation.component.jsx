import {Outlet, Link} from "react-router-dom";
import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";
import {signOutUser} from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
// import {signOutStart} from "../../store/user/user.action";
// import {CartContext} from "../../context/cart-context";
import {selectIsCartOpen} from "../../store/cart/cart.selector";
import {NavigationContainer, LogoContainer, NavLinks, NavLink} from './navigation.styles';
import {useSelector, useDispatch} from "react-redux";
import {selectCurrentUser} from "../../store/user/user.selector";

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();
    // const {isCartOpen} = useContext(CartContext);
    const isCartOpen = useSelector(selectIsCartOpen);
    // const signOutUser = () => dispatch(signOutStart());
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