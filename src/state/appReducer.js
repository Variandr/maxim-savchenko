import {currenciesAPI} from "../api/api"
import {setProducts} from "./bagReducer"
import {getCategories} from "./categoriesReducer"

const SET_CURRENCIES = '/app/SET_CURRENCIES'
const SET_ACTIVE_CURRENCY = '/app/SET_ACTIVE_CURRENCY'
const INITIALIZED = '/app/INITIALIZED'

const initialState = {
    currencies: [],
    isInitialized: false,
    activeCurrency: null
}

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENCIES:
            return {...state, currencies: action.currencies}
        case INITIALIZED:
            return {...state, isInitialized: true}
        case SET_ACTIVE_CURRENCY:
            return {...state, activeCurrency: action.activeCurrency}
        default:
            return state
    }
}
export default AppReducer

const _setCurrencies = (currencies) => ({
    type: SET_CURRENCIES, currencies
})
const _getCurrencies = () => async (dispatch) => {
    const currencies = await currenciesAPI.getCurrencies()
    dispatch(_setCurrencies(currencies))
}
const _initializeSuccess = () => ({
    type: INITIALIZED
})

export const setActiveCurrency = (activeCurrency) => ({
    type: SET_ACTIVE_CURRENCY, activeCurrency
})
export const initializeApp = () => (dispatch, getState) => {
    const promise = [dispatch(_getCurrencies()), dispatch(setProducts()), dispatch(getCategories())]
    Promise.all([...promise]).then(() => {
        dispatch(setActiveCurrency(getState().app.currencies[0].symbol))
        dispatch(_initializeSuccess())
    })
}
