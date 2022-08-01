import {productsAPI} from "../api/api"
import {
    deleteProductByUniqueId,
    findProductInsideLocalStorage,
    setProductCount,
    setUniqueProductId
} from '../helpers/storeHelpers'

const ADD_PRODUCT = '/bag/SET_PRODUCT'
const SET_PRODUCTS = '/bag/SET_PRODUCTS'
const DELETE_PRODUCT = '/bag/DELETE_PRODUCT'
const SET_COUNT = '/bag/SET_COUNT'

const initialState = {
    products: []
}

const BagReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {...state, products: action.products}
        case ADD_PRODUCT:
            return {...state, products: [...state.products, action.payload]}
        case DELETE_PRODUCT:
            return {...state, products: state.products.filter(p => p.uniqueItemId !== action.uniqueItemId)}
        case SET_COUNT:
            return {
                ...state, products: state.products.map(p => {
                    if (p.uniqueItemId === action.uniqueItemId) {
                        return {...p, count: action.count}
                    }
                    return p
                })
            }
        default:
            return state
    }
}
export default BagReducer

const _addProduct = (cart) => ({
    type: ADD_PRODUCT, payload: {...cart}
})
const _setProducts = (products) => ({
    type: SET_PRODUCTS, products
})
const _setCount = (count, uniqueItemId) => ({
    type: SET_COUNT, count, uniqueItemId
})
const _deleteProduct = (uniqueItemId) => ({
    type: DELETE_PRODUCT, uniqueItemId
})

export const setProducts = () => dispatch => {
    let products = JSON.parse(localStorage.getItem('bag'))
    if (products) {
        dispatch(_setProducts(products))
    }
}
export const setCount = (count, uniqueItemId) => (dispatch) => {
    let data = findProductInsideLocalStorage(uniqueItemId)
    if (data.isFound) {
        let products = setProductCount(data.products, uniqueItemId, count)
        localStorage.setItem('bag', JSON.stringify(products))
        dispatch(_setCount(count, uniqueItemId))
    } else console.log("Product wasn't found")
}
export const addProduct = (id, chosenAttributes, count = 1) => async (dispatch) => {
    let productData = await productsAPI.getProduct(id)
    let uniqueItemId = setUniqueProductId(id, chosenAttributes)
    let cart = {uniqueItemId, id, chosenAttributes, productData, count}
    let data = findProductInsideLocalStorage(uniqueItemId)
    if (data.products) {
        if (!data.isFound) {
            data.products.push(cart)
            localStorage.setItem('bag', JSON.stringify(data.products))
            dispatch(_addProduct(cart))
        } else console.log("Product already exist inside cart")
    } else {
        localStorage.setItem('bag', JSON.stringify([cart]))
        dispatch(_addProduct(cart))
    }
}

export const deleteProduct = (uniqueItemId) => (dispatch) => {
    let data = findProductInsideLocalStorage(uniqueItemId)
    if (data.isFound) {
        let products = deleteProductByUniqueId(data.products, uniqueItemId)
        localStorage.setItem('bag', JSON.stringify(products))
        dispatch(_deleteProduct(uniqueItemId))
    } else console.log("Product wasn't found")
}