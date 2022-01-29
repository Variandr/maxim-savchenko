import {productsAPI} from "../api/api"

const SET_PRODUCT = '/product/SET_PRODUCT'
const SET_LOADING = '/product/SET_LOADING'
let initialState = {
    product: null,
    isLoading: false
}

let ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCT:
            return {...state, product: action.product}
        case SET_LOADING:
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}
export default ProductReducer
const _setProduct = (product) => ({
    type: SET_PRODUCT, product
})
const _setLoading = (isLoading) => ({
    type: SET_LOADING, isLoading
})
export const getProductData = (id) => async (dispatch) => {
    dispatch(_setLoading(true))
    let product = await productsAPI.getProduct(id)
    dispatch(_setLoading(false))
    dispatch(_setProduct(product))
}