import s from "./product.module.css"
import React, {PureComponent} from "react"
import styled from "styled-components"

class Attributes extends PureComponent {
    render() {
        let {id = 0, name, items, type, setAttributes = null, attributes, index, cart = false} = this.props;
        let attributeItems = items.map(i => {
            let ColorBox = styled.div`
              background: ${i.value}
            `
            let isActive = false
            if (attributes && attributes[index]) {
                isActive = attributes[index].value === i.value
            }
            let setAttributeByClick = () => {
                if (setAttributes) setAttributes(i.value, id)
            }
            let attributeClassname = cart ? s.attributeItemCart : ''
            let activeTextAttribute = isActive ? s.activeAttributeTextItem : ''
            let activeImgAttribute = isActive ? s.activeAttributeColorItem : ''
            if (type === "swatch") {
                return <ColorBox onClick={setAttributeByClick}
                                 className={attributeClassname + ' ' + s.attributeItem + ' ' + activeImgAttribute}
                                 key={i.id}/>
            }else if (type === "text") {
                return <div onClick={setAttributeByClick}
                            className={attributeClassname + ' ' + s.attributeItem + ' ' + activeTextAttribute}
                            key={i.id}>{i.value}</div>
            } else return null
        })
        let attributeName = cart ? s.attributeNameCart : s.attributeName
        return <div>
            <div className={attributeName}>{name}:</div>
            <div className={s.attributes}>{attributeItems}</div>
        </div>
    }
}

export default Attributes