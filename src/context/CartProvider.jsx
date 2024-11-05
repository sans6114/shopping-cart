import { useReducer } from 'react';

import {
  cartReducer,
  initialState,
} from '../reducers/CartReducer';
import { cartContext } from './cartContext';

const useReducerCart = () => {
    const [state, dispatch] = useReducer(cartReducer, initialState)

    const addToCart = (producto) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: producto
        })
    }

    const removeFromCart = (producto) => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: producto
        })
    }
    const clearCart = () => {
        dispatch({
            type: 'CLEAR_CART',
        })
    }
    return {
        state,
        addToCart,
        removeFromCart,
        clearCart
    }
}
export const CartProvider = ({ children }) => {
    const { state, addToCart, removeFromCart, clearCart } = useReducerCart()
    return (
        <cartContext.Provider value={{
            state,
            addToCart,
            removeFromCart,
            clearCart
        }
        }>
            {children}
        </cartContext.Provider>
    )
}