import {createSlice} from "@reduxjs/toolkit";

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

const CART_INITIAL_STATE = {
    cartItems: [],
    isCartOpen: false
}

const cartSlice = createSlice({
    name: "cart",
    initialState: CART_INITIAL_STATE,
    reducers: {
        setIsCartOpen(state, action) {
            state.isCartOpen = action.payload;
        },
        addItemToCart(state, action) {
            state.cartItems = addCartItem(state.cartItems, action.payload);
        },
        removeItemFromCart(state, action) {
            state.cartItems = removeCartItem(state.cartItems, action.payload);
        },
        clearItemFromCart(state, action) {
            state.cartItems = clearCartItem(state.cartItems, action.payload);
        }
    }
})

export const {setIsCartOpen, addItemToCart, removeItemFromCart, clearItemFromCart} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;