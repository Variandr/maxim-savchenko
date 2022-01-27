import React from "react"
import s from './category.module.css'
import cart from '../../assets/cart.svg'
import {NavLink} from "react-router-dom"

const ProductItem = ({id, name, photo, brand, attributes, addProduct}) => {
    let tempArr = attributes.map(a => {
        return a.items.filter((i, index) => {
            if (index === 0) return i.value
        })
    })
    console.log(tempArr)
    return <div className={s.productBody}>
        <NavLink className={s.navLink} to={'/product/' + id}>
            <div className={s.image}><img className={s.productImg} src={photo} alt={name}/></div>
            <div className={s.name}>{name}</div>
        </NavLink>
        <div className={s.btnAdd} onClick={() => addProduct(id, name, brand, photo)}>
            <img className={s.cart} src={cart} alt='btnAdd'/>
        </div>
    </div>
}
export default ProductItem