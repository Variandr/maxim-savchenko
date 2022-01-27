import {categoriesAPI} from "../api/api"

const SET_CATEGORY = '/categories/SET_CATEGORY'
let initialState = {
    name: null,
    products: []
}

let CategoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORY:
            return {...state, name: action.name, products: action.products}
        default:
            return state
    }
}
export default CategoriesReducer
const _setCategory = (name, products) => ({
    type: SET_CATEGORY, name, products
})
export const getProducts = (categoryId) => async (dispatch) => {
    let category = await categoriesAPI.getCategory(categoryId)
    dispatch(_setCategory(category.name, category.products))
}