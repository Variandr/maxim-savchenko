import React from "react"
import ProductItem from "./productItem"
import s from './category.module.css'
import {sortProductsByName, toUpperLetterString} from "../../helpers/categoryHelper"

const Category = ({categoryData: {name, products}, addProduct, activeCurrency}) => {
    const sortedProducts = sortProductsByName(products)
    const productsItems = sortedProducts.map(p => {
        return <ProductItem addProduct={addProduct} {...p} key={p.id} activeCurrency={activeCurrency}/>
    })
    const categoryName = toUpperLetterString(name)

    return <div className={s.body}>
        <div className={s.categoryName}>{categoryName}</div>
        <div className={s.products}>{productsItems}</div>
    </div>
}
export default Category