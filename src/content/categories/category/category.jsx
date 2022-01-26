import React from "react"
import ProductItem from "./productItem";
import s from './category.module.css'

const Category = (props) => {
    let productsItems = props.products.map(p => {
        return <ProductItem id={p.id} key={p.id} name={p.name} photo={p.gallery[0]}/>
    })
    return <div className={s.body}>
        <div className={s.categoryName}>{props.name}</div>
        <div className={s.products}>{productsItems}</div>
    </div>
}
export default Category