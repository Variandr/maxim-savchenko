import s from "./product.module.css"
import React from "react"

const Attributes = ({id = 0, name, items, type, setAttributes = null, attributes, index, cart = false}) => {
    const attributeItems = items.map(i => {
        let isActive = false
        if (attributes && attributes[index]) {
            isActive = attributes[index].value === i.value
        }
        const setAttributeByClick = () => {
            if (setAttributes) setAttributes(i.value, id)
        }
        const attributeClassname = cart ? s.attributeItemCart : ''
        const activeTextAttribute = isActive ? s.activeAttributeTextItem : ''
        const activeImgAttribute = isActive ? s.activeAttributeColorItem : ''

        if (type === "swatch") {
            return <div onClick={setAttributeByClick}
                        style={{background: i.value}}
                        className={attributeClassname + ' ' + s.attributeItem + ' ' + activeImgAttribute}
                        key={i.id}/>
        } else if (type === "text") {
            return <div onClick={setAttributeByClick}
                        className={attributeClassname + ' ' + s.attributeItem + ' ' + activeTextAttribute}
                        key={i.id}>{i.value}</div>
        } else return null
    })

    return <div>
        <div className={cart ? s.attributeNameCart : s.attributeName}>{name}:</div>
        <div className={s.attributes}>{attributeItems}</div>
    </div>
}

export default Attributes