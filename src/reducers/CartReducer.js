export const initialState = []
//my function reducer
export const cartReducer = (state, action) => {
    const { type: actionType, payload: producto } = action
    switch (actionType) {
        case 'ADD_TO_CART': {
            const productInCartIndex = state.findIndex(cartItem => cartItem.product.id === producto.id)
            //si esto es mayor a cero significa ya existe ese item en carrito, por lo que hay que retornar el nuevo carrito con su cantidad ajustada
            if (productInCartIndex >= 0) {
                const newState = structuredClone(state)
                newState[productInCartIndex].quantity += 1
                return newState
            }
            //si esto no se cumple hay que agregar de cero el producto al carrito
            return [
                ...state,
                {
                    product: producto,
                    quantity: 1
                }
            ]
        }
        //remove
        case 'REMOVE_FROM_CART': {
            const newState = state.filter(cartItem => cartItem.product.id !== producto.id)
            return newState
        }
        //clear cart
        case 'CLEAR_CART': {
            const newState = initialState
            return newState
        }
    }
}
