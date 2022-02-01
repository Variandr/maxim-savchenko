import React from "react"
import ProductItem from "./productItem"
import s from './category.module.css'

const Category = ({categoryData, addProduct, activeCurrency}) => {
    let tempProducts = [...categoryData.products]
    let sortedProducts = tempProducts.sort((a, b) => {
        return ('' + a.name).localeCompare(b.name);
    })
    let productsItems = sortedProducts.map(p => {
        return <ProductItem addProduct={addProduct} id={p.id} key={p.id} name={p.name} photo={p.gallery[0]}
                            brand={p.brand} prices={p.prices} attributes={p.attributes}
                            activeCurrency={activeCurrency} inStock={p.inStock}/>
    })
    let name = categoryData.name
    if (categoryData.name) {
        name = categoryData.name.charAt(0).toUpperCase() + categoryData.name.slice(1)
    }
    return <div className={s.body}>
        <div className={s.categoryName}>{name}</div>
        <div className={s.products}>{productsItems}</div>
    </div>
}
export default Category