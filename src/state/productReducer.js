import {productsAPI} from "../api/api"

const SET_PRODUCT = '/product/SET_PRODUCT'
let initialState = {
    product: null
}

let ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCT:
            return {...state, product: action.product}
        default:
            return state
    }
}
export default ProductReducer
const _setProduct = (product) => ({
    type: SET_PRODUCT, product
})
export const getProductData = (id) => async (dispatch) => {
    let product = await productsAPI.getProduct(id)
    dispatch(_setProduct(product))
}