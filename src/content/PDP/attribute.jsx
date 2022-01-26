import s from "./product.module.css"
import React from "react"

const Attribute = ({name, items, type}) => {
    let attributeItems = items.map(i => {
        if (type === "swatch") {
            return <div className={s.attributeItem} key={i.id} style={{background: i.value}}>{}</div>
        } else if (type === "text") {
            return <div className={s.attributeItem} key={i.id}>{i.value}</div>
        } else return null
    })
    return <div>
        <div className={s.attributeName}>{name}:</div>
        <div className={s.attributes}>{attributeItems}</div>
    </div>
}
export default Attribute