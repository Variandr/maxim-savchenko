import React from "react"
import s from './cartOverlay.module.css'
import Attributes from "../../content/PDP/attribute"

const CartOverlayItem = ({
                             count, index, counterPlus, counterMinus, chosenAttributes,
                             activeCurrency, price, deleteProduct, uniqueItemId,
                             setCount, productData: {name, brand, gallery, attributes}
                         }) => {
    let getAttributes = attributes.map((a, index) => {
        return <Attributes index={index} key={a.id} items={a.items} type={a.type} name={a.name}
                           attributes={chosenAttributes} cart={true}/>
    })
    let addItemOnClick = () => {
        counterPlus(index)
        setCount(count + 1, uniqueItemId)
    }
    let removeItemOnClick = () => {
        if (count > 1) {
            counterMinus(index)
            setCount(count - 1, uniqueItemId)
        }
    }
    let deleteItemOnClick = () => deleteProduct(uniqueItemId)
    return <div className={s.bagItem}>
        <div>
            <div className={s.bagItemBrand}>{brand}</div>
            <div className={s.bagItemName}>{name}</div>
            <div className={s.bagItemPrice}>{activeCurrency}{price}</div>
            <div>{getAttributes}</div>
        </div>
        <div className={s.countingAndImgContainer}>
            <div className={s.counting}>
                <div className={s.counter} onClick={addItemOnClick}>+</div>
                <div className={s.countNum}>{count}</div>
                <div className={s.counter} onClick={removeItemOnClick}>-</div>
            </div>
            <div>
                <div className={s.bagItemImgContainer}>
                    <img className={s.bagItemImg} src={gallery[0]} alt='cartOverlayItemImg'/>
                </div>
            </div>
            <div className={s.deleteBtn} onClick={deleteItemOnClick}>X
            </div>
        </div>
    </div>
}
export default CartOverlayItem