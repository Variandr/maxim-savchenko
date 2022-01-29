import {productsAPI} from "../api/api"

const ADD_PRODUCT = '/bag/SET_PRODUCT'
const SET_PRODUCTS = '/bag/SET_PRODUCTS'
const DELETE_PRODUCT = '/bag/DELETE_PRODUCT'
const SET_COUNT = '/bag/SET_COUNT'
let initialState = {
    products: []
}

let BagReducer = (state = initialState, action) => {
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
const _addProduct = (uniqueItemId, id, chosenAttributes, productData, count) => ({
    type: ADD_PRODUCT, payload: {uniqueItemId, id, chosenAttributes, productData, count}
})
const _setProducts = (products) => ({
    type: SET_PRODUCTS, products
})
const _setCount = (count, uniqueItemId) => ({
    type: SET_COUNT, count, uniqueItemId
})
export const setProducts = () => dispatch => {
    let products = JSON.parse(localStorage.getItem('bag'))
    if (products) {
        dispatch(_setProducts(products))
    }
}
export const setCount = (count, uniqueItemId) => (dispatch) => {
    let products = JSON.parse(localStorage.getItem('bag'))
    if (products) {
        let isFound = false
        products.map(p => {
            if (p.uniqueItemId === uniqueItemId) {
                isFound = true
            }
        })
        if (isFound) {
            products = products.map(p => {
                if (p.uniqueItemId === uniqueItemId) {
                    return {...p, count: count}
                }
                return p
            })
            localStorage.setItem('bag', JSON.stringify(products))
            dispatch(_setCount(count, uniqueItemId))
        } else console.log("Product doesn't found")
    }
}
export const addProduct = (id, chosenAttributes, count = 1) => async (dispatch) => {
    let productData = await productsAPI.getProduct(id)
    let uniqueItemId = id + chosenAttributes.map(a => {
        return a.value
    })
    if (id === productData.id) {
        let cart = {
            uniqueItemId, id, chosenAttributes, productData, count
        }
        let products = JSON.parse(localStorage.getItem('bag'))
        if (products) {
            let isFound = false
            products.map(p => {
                if (p.uniqueItemId === uniqueItemId) {
                    isFound = true
                }
            })
            if (!isFound) {
                products.push(cart)
                localStorage.setItem('bag', JSON.stringify(products))
                dispatch(_addProduct(uniqueItemId, id, chosenAttributes, productData, count))
            } else console.log("Product already exist inside cart")
        } else localStorage.setItem('bag', JSON.stringify([cart]))
    }
}
const _deleteProduct = (uniqueItemId) => ({
    type: DELETE_PRODUCT, uniqueItemId
})

export const deleteProduct = (uniqueItemId) => (dispatch) => {
    let products = JSON.parse(localStorage.getItem('bag'))
    if (products) {
        let isFound = false
        products.map(p => {
            if (p.uniqueItemId === uniqueItemId) {
                isFound = true
            }
        })
        if (isFound) {
            products = products.filter(p => p.uniqueItemId !== uniqueItemId)
            localStorage.setItem('bag', JSON.stringify(products))
            dispatch(_deleteProduct(uniqueItemId))
        } else console.log("Product doesn't found")
    }
}