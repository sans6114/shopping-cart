import { useReducer } from 'react';

import {
  cartReducer,
  initialState,
} from '../reducers/CartReducer';
import { cartContext } from './cartContext';

export const CartProvider = ({ children }) => {
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