import React, {useEffect, useState} from "react"
import s from './cartOverlay.module.css'
import CartOverlayItem from "./cartOverlayItem"
import {NavLink} from "react-router-dom"
import {getCurrentPrice} from "../../helpers/cartOverlayHelpers";

const CartOverlay = ({products, activeCurrency, deleteProduct, setCount, productsLength}) => {
    const [productsCount, setProductCount] = useState([])

    useEffect(() => {
        let a = []
        products.map(p => {
            a.push(p.count)
            return p
        })
        setProductCount([...productsCount, ...a])
    })

    const counterPlus = (id) => {
        setProductCount(productsCount.map((p, index) => {
            if (index === id) {
                return p + 1
            }
            return p
        }))
    }

    const counterMinus = (id) => {
        setProductCount(productsCount.map((p, index) => {
            if (index === id) return p - 1
            return p
        }))
    }

    let totalPrice = 0

    return <div className={s.bag}>
        <div className={s.bagHeader}><span className={s.bagHeaderName}>My bag, </span>
            <span className={s.bagHeaderItems}>{productsLength} {productsLength === 1 ? "item" : "items"}</span>
        </div>
        <div className={s.bagItemsContainer}>{products.map((p, index) => {
            let price = getCurrentPrice(p.productData.prices, activeCurrency)
            totalPrice += price[0].amount * productsCount[index]
            return <CartOverlayItem index={index}
                                    count={productsCount[index]}
                                    setCount={setCount}
                                    counterPlus={counterPlus}
                                    counterMinus={counterMinus}
                                    key={p.id} {...p}
                                    price={price[0].amount}
                                    deleteProduct={deleteProduct}
                                    activeCurrency={activeCurrency}/>
        })}</div>
        <div className={s.totalContainer}><span className={s.totalName}>Total</span>
            <span className={s.totalPrice}>{activeCurrency}{totalPrice.toFixed(2)}</span>
        </div>
        <div className={s.bagButtons}>
            <NavLink to={"/basket"} className={s.navLink}>
                <div className={s.viewBagBtn}>View bag</div>
            </NavLink>
            <div className={s.checkOutBtn}>Check out</div>
        </div>
    </div>
}

export default CartOverlay