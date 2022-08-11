import React, { useContext, useMemo, useReducer } from "react";

const initialCart = {
    items: {},
    value: 0,
    total_qty: 0
}

const addItem = (state, product, quantity) => {
    let item = state?.items?.[product.name];
    if (item) {
        item.quantity += quantity;
    } else {
        item = {
            ...product,
            quantity
        }
    }
    let updatedCart = {
        ...state,
        items: {
            ...state.items,
            [product.name]: item
        },
        value: Math.max(0, state.value + (product.price * quantity)),
        total_qty: Math.max(0, state.total_qty + quantity)
    }
    return updatedCart;
}

const removeItem = (state, product, quantity) => {
    let item = state?.items?.[product.name];
    if (item) {
        item.quantity -= quantity;
    } else return state;

    let updatedCart = {
        ...state,
        items: {
            ...state.items,
            [product.name]: item
        },
        value: Math.max(0, state.value - (product.price * quantity)),
        total_qty: Math.max(0, state.total_qty - quantity)
    }
    return updatedCart;
}

const clearCart = () => {
    return initialCart;
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return addItem(state, action.product, action.quantity);
        case 'REMOVE_ITEM':
            return removeItem(state, action.product, action.quantity);
        case 'CLEAR_CART':
            return clearCart();
        default:
            return state;
    }
}

export const CartContext = React.createContext();

export const CartProvider = ({children}) => {

    const [cart, dispatch] = useReducer(cartReducer, initialCart);

    const contextValue = useMemo(()=>{
        return [cart, dispatch]
    }, [cart]);

    return (
        <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
    )
}

export const useCart = () => {
    const [cart, dispatch] = useContext(CartContext);

    const addItem = (product, quantity) => {
        dispatch({type: "ADD_ITEM", product, quantity})
    }
    const removeItem = (product, quantity) => dispatch({type: "REMOVE_ITEM", product, quantity});
    const clearCart = () => dispatch({type: "CLEAR_CART"});

    return {
        cart,
        addItem,
        removeItem,
        clearCart
    }
}