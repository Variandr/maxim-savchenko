import React, {useEffect, useState} from "react"
import s from './product.module.css'
import Attribute from "./attribute"

const Product = ({product}) => {
    let getAttributes = () => {
        return product.attributes.map(a => {
            return <Attribute key={a.id} name={a.name} items={a.items} type={a.type}/>
        })
    }
    let [productMainImg, setImage] = useState(null)
    useEffect(() => {
        setImage(product.gallery[0])
    }, [product])
    let gallery = product.gallery.map((p, i) => {
        return <div key={i} className={s.productImgBtn} onClick={() => setImage(p)}>
            <img className={s.productImg} src={p} alt={product.name}/>
        </div>
    })
    let attributes = getAttributes()
    return <div className={s.body}>
        <div>{gallery}</div>
        <div><img key={productMainImg} className={s.mainImg} src={productMainImg} alt="mainProductImg"/></div>
        <div>
            <div className={s.productName}>{product.name}</div>
            <div className={s.productBrand}>{product.brand}</div>
            <div className={s.productAttributes}>{attributes}</div>
            <div className={s.productDescription} dangerouslySetInnerHTML={{__html: product.description}}>{}</div>
        </div>
    </div>
}
export default Product