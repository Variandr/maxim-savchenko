const ADD_PRODUCT = '/bag/SET_PRODUCT'
const DELETE_PRODUCT = '/bag/DELETE_PRODUCT'
let initialState = {
    products: []
}

let BagReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {...state, products: action.product}
        case DELETE_PRODUCT:
            return {...state, products: state.products.filter(p => p.name !== action.name)}
        default:
            return state
    }
}
export default BagReducer
export const addProduct = (product) => ({
    type: ADD_PRODUCT, product
})
export const deleteProduct = (name) => ({
    type: DELETE_PRODUCT, name
})