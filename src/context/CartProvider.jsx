import { useReducer } from 'react';

import {
  cartReducer,
  initialState,
} from '../reducers/CartReducer';
import { cartContext } from './cartContext';

export const CartProvider = ({ children }) => {


        //useReducer 
        const [state, dispatch] = useReducer(cartReducer, initialState)

        const addToCart = (producto) => {
            dispatch({
                type: 'addToCart',
                payload: producto
            })
        }

        const removeFromCart = (producto) => {
            dispatch({
                type: 'removeFromCart',
                payload: producto
            })
        }

        const clearCart = () => {
            dispatch({
                type: 'clearCart'
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