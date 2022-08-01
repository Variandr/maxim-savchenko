import s from "./cartOverlay.module.css"
import bag from "../../assets/cartBox.svg"
import CartOverlayContainer from "./cartOverlayContainer"
import React from "react"
import {ProductsCounter} from "../../helpers/headerHelpers"

const CartOverlayMain = ({products, toggleBagOpening, isBagOpened}) => {
    const productsLength = ProductsCounter(products)

    return <div tabIndex="0" onBlur={() => setTimeout(() => toggleBagOpening(false), 200)}>
        <div className={s.cartButton} onClick={() => toggleBagOpening(!isBagOpened)}>
            <img className={s.cartButtonImgSize} src={bag} alt='bag'/>
            {productsLength > 0 &&
                <div className={s.cartOverlayProducts}>{productsLength}</div>
            }
        </div>
        {isBagOpened &&
            <CartOverlayContainer toggleBagOpening={toggleBagOpening}
                                  productsLength={productsLength}/>
        }
    </div>
}
export default CartOverlayMain