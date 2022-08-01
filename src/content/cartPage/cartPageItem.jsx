import s from './cartPage.module.css'
import React, {useState} from "react"
import Attributes from "../PDP/attribute"
import {getCurrentPrice} from "../../helpers/cartOverlayHelpers"
import CartPageItemImage from "./cartPageItemImage"

const CartPageItem = ({
                          productData: {name, brand, gallery, attributes, prices},
                          activeCurrency, chosenAttributes, uniqueItemId, deleteProduct, count, setCount
                      }) => {
    const [store, setStore] = useState({
        count: count,
        imgId: 0
    })

    const counterPlus = () => {
        setStore({...store, count: store.count + 1})
        setCount(store.count + 1, uniqueItemId)
    }
    const counterMinus = () => {
        if (store.count > 1) {
            setStore({...store, count: store.count - 1})
            setCount(store.count - 1, uniqueItemId)
        }
    }
    const swapImageToRight = () => {
        if (store.imgId < gallery.length - 1) {
            setStore({
                imgId: store.imgId + 1
            })
        }
    }
    const swapImageToLeft = () => {
        if (store.imgId > 0) {
            setStore({
                imgId: store.imgId - 1
            })
        }
    }

    const getAttributes = attributes.map((a, index) => {
        return <Attributes index={index}
                           key={a.id}
                           items={a.items}
                           type={a.type}
                           name={a.name}
                           attributes={chosenAttributes}/>
    })
    const price = getCurrentPrice(prices, activeCurrency)

    return <div className={s.bagContainer}>
        <div>
            <div className={s.cartBrand}>{brand}</div>
            <div className={s.cartName}>{name}</div>
            <div className={s.cartPrice}>{activeCurrency}{price[0].amount}</div>
            <div>{getAttributes}</div>
        </div>
        <div className={s.imgAndCounterContainer}>
            <div className={s.counterContainer}>
                <div className={s.counter} onClick={counterPlus}>+</div>
                <div className={s.countNum}>{store.count}</div>
                <div className={s.counter} onClick={counterMinus}>-</div>
            </div>
            <CartPageItemImage gallery={gallery}
                               swapImageToLeft={swapImageToLeft}
                               swapImageToRight={swapImageToRight}
                               imgId={store.imgId}/>
            <div className={s.deleteBtn} onClick={() => deleteProduct(uniqueItemId)}>X</div>
        </div>
    </div>
}

export default CartPageItem