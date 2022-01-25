import React from "react"
import s from './category.module.css'
import cart from '../../../assets/cart.svg'
const ProductItem = ({key, name, photo}) => {
    return <div className={s.productBody}>
        <div className={s.image}><img className={s.productImg} src={photo} alt={key}/></div>
        <div className={s.name}>{name}</div>
        <div className={s.btnAdd}><img className={s.cart} src={cart} alt='btnAdd'/></div>
    </div>
}
export default ProductItem