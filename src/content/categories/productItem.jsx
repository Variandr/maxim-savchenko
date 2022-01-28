import React from "react"
import s from './category.module.css'
import cart from '../../assets/cart.svg'
import {NavLink} from "react-router-dom"

const ProductItem = ({id, name, photo, brand, attributes, addProduct, activeCurrency, prices}) => {
    let price = prices.filter(p => p.currency.symbol === activeCurrency)
    let tempArr = [];
    attributes.map(a => {
        return a.items.forEach((i, index) => {
            if (index === 0) tempArr = [...tempArr, {id: i.id, value: i.value, type: a.type}]
        })
    })
    return <div className={s.productBody}>
        <NavLink className={s.navLink} to={'/product/' + id}>
            <div className={s.image}><img className={s.productImg} src={photo} alt={name}/></div>
            <div className={s.name}>{name}</div>
            <div className={s.price}>{activeCurrency} {price[0].amount}</div>
        </NavLink>
        <div className={s.btnAdd} onClick={() => addProduct(id, name, brand, photo, tempArr, prices)}>
            <img className={s.cart} src={cart} alt='btnAdd'/>
        </div>
    </div>
}
export default ProductItem