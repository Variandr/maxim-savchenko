import {applyMiddleware, combineReducers, createStore} from "redux"
import thunkMiddleware from "redux-thunk"
import BagReducer from "./bagReducer"
import ProductReducer from "./productReducer"
import CategoriesReducer from "./categoriesReducer"
import AppReducer from "./appReducer"

let reducers = combineReducers({
    categoriesPage: CategoriesReducer,
    bagPage: BagReducer,
    productPage: ProductReducer,
    app: AppReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store
export default store