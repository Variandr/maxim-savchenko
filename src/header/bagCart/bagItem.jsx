import React from "react"
import s from './bag.module.css'
import Attributes from "../../content/PDP/attribute"

const BagItem = ({
                     count, id, counterPlus, counterMinus, name, brand, photo, attributes, chosenAttributes,
                     activeCurrency, price, deleteProduct, uniqueItemId, setCount
                 }) => {
    let getAttributes = attributes.map((a, index) => {
        return <Attributes index={index} key={a.id} items={a.items} type={a.type}
                           attributes={chosenAttributes} cart={true}/>
    })
    return <div className={s.bagItem}>
        <div>
            <div className={s.bagItemName}>{name}</div>
            <div className={s.bagItemBrand}>{brand}</div>
            <div className={s.bagItemPrice}>{activeCurrency}{price}</div>
            <div>{getAttributes}</div>
        </div>
        <div className={s.countingAndImgContainer}>
            <div className={s.counting}>
                <div className={s.counter} onClick={() => {
                    counterPlus(id)
                    setCount(count + 1, uniqueItemId)
                }}>+
                </div>
                <div className={s.countNum}>{count}</div>
                <div className={s.counter} onClick={() => {
                    if (count > 1) {
                        counterMinus(id)
                        setCount(count - 1, uniqueItemId)
                    }
                }}>-
                </div>
            </div>
            <div>
                <div><img className={s.bagItemImg} src={photo} alt={photo}/></div>
            </div>
            <div className={s.deleteBtn} onClick={() => deleteProduct(uniqueItemId)}>X
            </div>
        </div>
    </div>
}
export default BagItem