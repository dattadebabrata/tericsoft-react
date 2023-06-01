import {CART_ACTION_TYPES} from "./cart.types";
import {createAction} from "../../utils/reducer/reducer.utils";


const addCartItem = (cartItems, productToAdd) => {
    //find cartItems contains productToAdd;
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);

    //if found increment quantity;
    if (existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === productToAdd.id ? {
            ...cartItem,
            quantity: cartItem.quantity + 1
        } : cartItem);
    }

    //return new array with modified cart items/new cart items;
    return [...cartItems, {...productToAdd, quantity: 1}];
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    //find cartItems contains cartItemToRemove;
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);
    //check if quantity is 1, if it is remove cartItem;
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }
    //return back cartItems with maching cart items with reduced quantity;
    return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ? {
        ...cartItem,
        quantity: cartItem.quantity - 1
    } : cartItem);
}
const clearCartItem = (cartItems, cartItemToClear) => cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);


export const setIsCartOpen = (boolean) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);


export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}
export const clearItemFromCart = (cartItems, cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}