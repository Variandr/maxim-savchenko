export const getProducts = (state) => {
    return state.bagPage.products
}
export const getCurrencies = (state) => {
    return state.app.currencies
}
export const getActiveCurrency = (state) => {
    return state.app.activeCurrency
}
export const getCategoryName = (state) => {
    return state.categoriesPage.name
}
export const getCategoryProducts = (state) => {
    return state.categoriesPage.products
}
export const getProduct = (state) => {
    return state.productPage.product
}
export const getLoadingProduct = (state) => {
    return state.productPage.isLoading
}