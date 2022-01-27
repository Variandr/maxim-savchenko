import s from "./product.module.css"
import React, {PureComponent} from "react"

class Attribute extends PureComponent {
    render() {
        let {id, name, items, type, setAttributes} = this.props;
        let attributeItems = items.map(i => {
            if (type === "swatch") {
                return <div onClick={() => setAttributes(i.value, id, i.displayValue)} className={s.attributeItem} key={i.id}
                            style={{background: i.value}}>{}</div>
            } else if (type === "text") {
                return <div onClick={() => setAttributes(i.value, id, i.displayValue)} className={s.attributeItem} key={i.id}>{i.value}</div>
            } else return null
        })
        return <div>
            <div className={s.attributeName}>{name}:</div>
            <div className={s.attributes}>{attributeItems}</div>
        </div>
    }
}
export default Attribute