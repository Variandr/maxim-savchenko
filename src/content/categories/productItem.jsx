import React from "react"
import s from './category.module.css'
import cart from '../../assets/cart.svg'
import {NavLink} from "react-router-dom"

const ProductItem = ({id, name, brand, photo, attributes, addProduct, activeCurrency, prices, inStock}) => {
    let price = prices.filter(p => p.currency.symbol === activeCurrency)
    let tempArr = []
    attributes.map(a => {
        return a.items.forEach((i, index) => {
            if (index === 0) tempArr = [...tempArr, {id: i.id, value: i.value}]
        })
    })
    if (!tempArr.length) tempArr = null
    return <div className={s.productBody}>
        <NavLink className={s.navLink} to={'/product/' + id}>
            {!inStock && <div className={s.outOfStockImg}>
                OUT OF STOCK
            </div>}
            <div className={s.image}><img className={s.productImg} src={photo} alt={name}/></div>
            <div className={inStock ? s.name : s.outOfStockName}>{brand} {name}</div>
            <div className={inStock ? s.price : s.outOfStockPrice}>{activeCurrency} {price[0].amount}</div>
        </NavLink>
        {inStock && <div className={s.btnAdd} onClick={() => addProduct(id, tempArr)}>
            <img className={s.cart} src={cart} alt='btnAdd'/>
        </div>
        }
    </div>
}
export default ProductItem