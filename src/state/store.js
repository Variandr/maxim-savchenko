import {applyMiddleware, combineReducers, createStore} from "redux"
import thunkMiddleware from "redux-thunk"
import BagReducer from "./bagReducer"
import ProductReducer from "./productReducer"
import CategoriesReducer from "./categoriesReducer";

let reducers = combineReducers({
    categoriesPage: CategoriesReducer,
    bagPage: BagReducer,
    productPage: ProductReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store
export default store