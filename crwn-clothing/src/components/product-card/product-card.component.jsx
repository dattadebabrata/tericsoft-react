import "./product-card.styles.scss";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import {useDispatch, useSelector} from "react-redux";
import {addItemToCart} from "../../store/cart/cart.reducer";
import {selectCartItems} from "../../store/cart/cart.selector";

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    // const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    const addProductToCart = () => dispatch(addItemToCart( product));
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button onClick={addProductToCart} buttonType={BUTTON_TYPE_CLASSES.inverted}>Addd to Cart</Button>
        </div>
    )

}

export default ProductCard;