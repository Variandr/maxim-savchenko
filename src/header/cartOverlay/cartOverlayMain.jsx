import s from "./cartOverlay.module.css"
import bag from "../../assets/cartBox.svg"
import CartOverlayContainer from "./cartOverlayContainer"
import React from "react"
import {ProductsCounter} from "../../helpers/headerHelpers"

const CartOverlayMain = ({products, toggleBagOpening, isBagOpened}) => {
    let productsLength = ProductsCounter(products)
    let CloseCartOverlayOnBlur = () => setTimeout(() => toggleBagOpening(false), 200)
    let toggleCartOverlayOnClick = () => toggleBagOpening(!isBagOpened)
    return <div tabIndex="0" onBlur={CloseCartOverlayOnBlur}>
        <div className={s.cartButton} onClick={toggleCartOverlayOnClick}>
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