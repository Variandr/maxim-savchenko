export const findProductInsideLocalStorage = (uniqueItemId) => {
    let products = JSON.parse(localStorage.getItem('bag'))
    let isFound = false
    if (products) {
        products.map(p => {
            if (p.uniqueItemId === uniqueItemId) {
                isFound = true
                return p
            }
            return p
        })
    }
    return {products, isFound}
}

export const setProductCount = (products, uniqueItemId, count) => {
    return products.map(p => {
        if (p.uniqueItemId === uniqueItemId) {
            return {...p, count: count}
        }
        return p
    })
}
export const setUniqueProductId = (id, chosenAttributes) => {
    return id + (chosenAttributes && chosenAttributes.map(a => {
        return a.value
    }))
}
export const deleteProductByUniqueId = (products, uniqueItemId) => {
    return products.filter(p => p.uniqueItemId !== uniqueItemId)
}