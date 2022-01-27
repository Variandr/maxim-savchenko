import React from "react"
import Attribute from "../../content/PDP/attribute";
import s from './bag.module.css'

const BagItem = ({count, id, counterPlus, counterMinus, name, brand, photo, attributes}) => {
    let getAttributes = attributes.map(a => {
        return <Attribute id={a.id} key={a.id} name={a.name} items={a.items} type={a.type}/>
    })
    return <div className={s.bagItem}>
        <div className={s.bagItemName}>{name}</div>
        <div className={s.bagItemBrand}>{brand}</div>
        <div className={s.bagItemImgBox}><img className={s.bagItemImg} src={photo} alt={photo}/></div>
        <div className={s.counter + " " + s.counterPlus} onClick={() => counterPlus(id)}>+</div>
        <div className={s.countNum}>{count}</div>
        <div className={s.counter + " " + s.counterMinus} onClick={() => count > 1 && counterMinus(id)}>-</div>
        {/*<div>{getAttributes}</div>*/}
    </div>
}
export default BagItem