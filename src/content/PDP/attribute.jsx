import s from "./product.module.css"
import React, {PureComponent} from "react"

class Attributes extends PureComponent {
    render() {
        let {id = 0, name = '', items, type, setAttributes = null, attributes, index, cart = false} = this.props;
        let attributeItems = items.map(i => {
            let isActive = false
            if (attributes && attributes[index]) {
                console.log(attributes[index])
                isActive = attributes[index].value === i.value
            }
            if (type === "swatch") {
                return <div onClick={() => {
                    if (setAttributes) setAttributes(i.value, id)
                }}
                            className={(cart && s.attributeItemCart) + ' ' + s.attributeItem + ' ' + (isActive && s.activeAttributeColorItem)} key={i.id}
                            style={{background: i.value}}/>
            } else if (type === "text") {
                return <div onClick={() => {
                    if (setAttributes) setAttributes(i.value, id)
                }}
                            className={(cart && s.attributeItemCart) + ' ' + s.attributeItem + ' ' + (isActive && s.activeAttributeTextItem)}
                            key={i.id}>{i.value}</div>
            } else return null
        })
        return <div>
            <div className={s.attributeName}>{name}{name && ':'}</div>
            <div className={s.attributes}>{attributeItems}</div>
        </div>
    }
}

export default Attributes