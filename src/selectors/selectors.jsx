export const getProducts = (state) => {
    return state.bagPage.products
}
export const getCurrencies = (state) => {
    return state.app.currencies
}
export const getActiveCurrency = (state) => {
    return state.app.activeCurrency
}
export const getCategories = (state) => {
    return state.categoriesPage.categories
}
export const getCategoryData = (state) => {
    return state.categoriesPage.categoryData
}
export const getProduct = (state) => {
    return state.productPage.product
}
export const getLoadingProduct = (state) => {
    return state.productPage.isLoading
}
export const getInitialize = (state) => {
    return state.app.isInitialized
}