import React from "react"
import s from './category.module.css'
import cart from '../../../assets/cart.svg'
import {NavLink} from "react-router-dom"

const ProductItem = ({id, name, photo}) => {
    return <div className={s.productBody}>
        <div className={s.image}><img className={s.productImg} src={photo} alt={name}/></div>
        <div className={s.name}>{name}</div>
        <NavLink to={'/product/' + id}>
            <div className={s.btnAdd}><img className={s.cart} src={cart} alt='btnAdd'/></div>
        </NavLink>

    </div>
}
export default ProductItem