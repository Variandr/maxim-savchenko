const ADD_PRODUCT = '/bag/SET_PRODUCT'
const DELETE_PRODUCT = '/bag/DELETE_PRODUCT'
let initialState = {
    products: []
}

let BagReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {...state, products: [...state.products, action.payload]}
        case DELETE_PRODUCT:
            return {...state, products: state.products.filter(p => p.id !== action.id)}
        default:
            return state
    }
}
export default BagReducer
export const addProduct = (id, name, brand, photo, attributes, prices) => ({
    type: ADD_PRODUCT, payload:{id, name, brand, photo, attributes, prices}
})

export const deleteProduct = (id) => ({
    type: DELETE_PRODUCT, id
})