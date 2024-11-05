export const initialState = JSON.parse(localStorage.getItem('cart')) || []


const reducerCases = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAR_CART: 'CLEAR_CART',
}


const updateLocalStorage = (state) => {
    const cartInStorage = localStorage.setItem('cart', JSON.stringify(state))
    return cartInStorage
}

//my function reducer
export const cartReducer = (state, action) => {
    const { type: actionType, payload: producto } = action
    switch (actionType) {
        case (reducerCases.ADD_TO_CART): {
            const productInCartIndex = state.findIndex(cartItem => cartItem.product.id === producto.id)
            //si esto es mayor a cero significa ya existe ese item en carrito, por lo que hay que retornar el nuevo carrito con su cantidad ajustada
            if (productInCartIndex >= 0) {
                const newState = structuredClone(state)
                newState[productInCartIndex].quantity += 1
                return newState
            }
            //si esto no se cumple hay que agregar de cero el producto al carrito
            const newState = [
                ...state,
                {
                    product: producto,
                    quantity: 1
                }
            ]
            updateLocalStorage(newState)
            return newState
        }
        //remove
        case (reducerCases.REMOVE_FROM_CART): {
            const newState = state.filter(cartItem => cartItem.product.id !== producto.id)
            updateLocalStorage(newState)
            return newState
        }
        //clear cart
        case (reducerCases.CLEAR_CART): {
            const newState = initialState
            updateLocalStorage(newState)
            return newState
        }
    }
}
