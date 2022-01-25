import {categoriesAPI} from "../api/api"

const SET_CATEGORY = '/clothes/SET_CATEGORY'
let initialState = {
    name: null,
    products: []
}

let ClothesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORY:
            return {...state, name: action.name, products: action.products}
        default:
            return state
    }
}
export default ClothesReducer
const _setCategory = (name, products) => ({
    type: SET_CATEGORY, name, products
})
export const getProducts = () => async (dispatch) => {
    let category = await categoriesAPI.getCategory("clothes")
    dispatch(_setCategory(category.name, category.products))
}