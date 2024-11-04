import { useContext } from 'react';

import { cartContext } from '../context/cartContext';

export const useCart = () => {
    const context = useContext(cartContext)

    //si falta provider...
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider')
    }
    

    return context
}