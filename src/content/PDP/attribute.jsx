import s from "./product.module.css"
import React, {PureComponent} from "react"

class Attributes extends PureComponent {
    render() {
        let {id, name, items, type, setAttributes, attributes, index} = this.props;
        let attributeItems = items.map(i => {
            let isActive = false
            if (attributes !== null) {
                isActive = attributes[index].value === i.value
            }
            if (type === "swatch") {
                return <div onClick={() => setAttributes(i.value, id, type)}
                            className={s.attributeItem + ' ' + (isActive && s.activeAttributeColorItem)} key={i.id}
                            style={{background: i.value}}> </div>
            } else if (type === "text") {
                return <div onClick={() => setAttributes(i.value, id, type)}
                            className={s.attributeItem + ' ' + (isActive && s.activeAttributeTextItem)}
                            key={i.id}>{i.value}</div>
            } else return null
        })
        return <div>
            <div className={s.attributeName}>{name}:</div>
            <div className={s.attributes}>{attributeItems}</div>
        </div>
    }
}

export default Attributes