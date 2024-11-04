export const initialState = []

export const cartReducer = (state, action) => {
    
    const { type: actionType, payload: actionPayload } = action

    switch (actionType) {
        case 'addToCart': {
            const { id } = actionPayload
            const productCardIndex = state.findIndex(item => item.product.id === id)
            if (productCardIndex >= 0) {
                const newState = structuredClone(state)
                newState[productCardIndex].quantity += 1
                return newState
            }
            return [
                ...state,
                {
                    product: actionPayload,
                    quantity: 1
                }
            ]
        }
        // remove
        case 'removeFromCart': {
            const { id } = actionPayload
            const newState = state.filter(item => item.product.id !== id)
            return newState
        }
        //clear cart
        case 'clearCart': {
            return initialState
        }
    }
}