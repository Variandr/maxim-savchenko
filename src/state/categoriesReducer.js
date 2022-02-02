import {categoriesAPI} from "../api/api"

const SET_CATEGORY_DATA = '/categories/SET_CATEGORY_DATA'
const SET_CATEGORIES = '/categories/SET_CATEGORIES'

let initialState = {
    categoryData: null,
    categories: []
}

let CategoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORY_DATA:
            return {...state, categoryData: {name: action.name, products: action.products}}
        case SET_CATEGORIES:
            return {...state, categories: action.categories}
        default:
            return state
    }
}
export default CategoriesReducer

const _setCategoryData = (name, products) => ({
    type: SET_CATEGORY_DATA, name, products
})
const _setCategories = (categories) => ({
    type: SET_CATEGORIES, categories
})

export const getProducts = (categoryId) => async (dispatch) => {
    let category = await categoriesAPI.getCategoryData(categoryId)
    dispatch(_setCategoryData(category.name, category.products))
}
export const getCategories = () => async (dispatch) => {
    let categories = await categoriesAPI.getCategories()
    dispatch(_setCategories(categories))
}