import React from "react"
import s from './category.module.css'
import cart from '../../assets/cart.svg'
import {NavLink} from "react-router-dom"
import {getCurrentPrice} from "../../helpers/cartOverlayHelpers"
import {getDefaultAttributes} from "../../helpers/categoryHelper"

const ProductItem = ({id, name, brand, gallery, attributes, addProduct, activeCurrency, prices, inStock}) => {
    const price = getCurrentPrice(prices, activeCurrency)
    const chosenAttributes = getDefaultAttributes(attributes)
    const inStockName = inStock ? s.name : s.outOfStockName
    const inStockPrice = inStock ? s.price : s.outOfStockPrice
    const AddToCartOnClick = () => addProduct(id, chosenAttributes)

    return <div className={s.productBody}>
        <NavLink className={s.navLink} to={'/product/' + id}>
            {!inStock &&
                <div className={s.outOfStockImg}>OUT OF STOCK</div>
            }
            <div className={s.image}><img className={s.productImg} src={gallery[0]} alt={name}/></div>
            <div className={inStockName}>{brand} {name}</div>
            <div className={inStockPrice}>{activeCurrency} {price[0].amount}</div>
        </NavLink>
        {inStock &&
            <div className={s.btnAdd} onClick={AddToCartOnClick}>
                <img className={s.cart} src={cart} alt='btnAdd'/>
            </div>
        }
    </div>
}
export default ProductItem