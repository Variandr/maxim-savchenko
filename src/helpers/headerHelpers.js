export const ProductsCounter = (products) => {
    let productsLength = 0
    if (products) {
        products.map(p => {
            productsLength += p.count
            return p
        })
    }
    return productsLength
}