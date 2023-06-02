import "./checkout-item.styles.scss";
import {useSelector, useDispatch} from "react-redux";
import {selectCartItems} from "../../store/cart/cart.selector";
import {clearItemFromCart, addItemToCart, removeItemFromCart} from "../../store/cart/cart.reducer";

const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    // const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();
    const clearItemHandler = () => dispatch(clearItemFromCart(cartItem));
    const addItemHandler = () => dispatch(addItemToCart(cartItem));
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItem));
    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
            <div onClick={removeItemHandler} className="arrow">
                &#10094;
            </div>
                <span className="value">
                {quantity}
                </span>
            <div onClick={addItemHandler} className="arrow">
                &#10095;
            </div>
            </span>
            <span className="price">{price}</span>
            <div onClick={clearItemHandler} className="remove-button">&#10005;</div>
        </div>
    )
}

export default CheckoutItem;