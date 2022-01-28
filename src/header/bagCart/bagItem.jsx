import React from "react"
import s from './bag.module.css'
import Attributes from "../../content/PDP/attribute"

const BagItem = ({count, id, counterPlus, counterMinus, name, brand, photo, attributes, activeCurrency, price}) => {
    let getAttributes = attributes.map((a, index) => {
        return <Attributes index={index} key={a.id} items={attributes}
                           attributes={attributes}/>
    })
    return <div className={s.bagItem}>
        <div className={s.bagItemName}>{name}</div>
        <div className={s.bagItemBrand}>{brand}</div>
        <div className={s.bagItemPrice}>{activeCurrency}{price}</div>
        <div className={s.bagItemImgBox}><img className={s.bagItemImg} src={photo} alt={photo}/></div>
        <div className={s.counter + " " + s.counterPlus} onClick={() => counterPlus(id)}>+</div>
        <div className={s.countNum}>{count}</div>
        <div className={s.counter + " " + s.counterMinus} onClick={() => count > 1 && counterMinus(id)}>-</div>
        <div>{getAttributes}</div>
    </div>
}
export default BagItem