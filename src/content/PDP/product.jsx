import React, {useEffect, useState} from "react"
import s from './product.module.css'
import Attributes from "./attribute"
import Preloader from "../../helpers/preloader"
import ReactHtmlParser from 'html-react-parser'
import usePrevious from "../../helpers/usePrevious";

const Product = ({product, addProduct, activeCurrency}) => {
    const [store, setStore] = useState({
        productMainImg: product.gallery[0],
        attributes: null
    })

    const setAttributes = (value, id) => {
        let isFoundById = false;
        setStore({
            ...store,
            attributes: store.attributes.map(a => {
                if (a.id === id) {
                    isFoundById = true;
                    return {id, value}
                }
                return a
            })
        })
        if (!isFoundById) {
            setStore({
                ...store,
                attributes: [...store.attributes, {id, value}]
            })
        }
    }

    const prevProps = usePrevious(product)
    useEffect(() => {
        if (product !== prevProps) {
            setStore({
                attributes: null,
                productMainImg: product.gallery[0]
            })
        }

        if (!store.attributes) {
            let tempArr = []
            product.attributes.map(a => {
                a.items.forEach((i, index) => {
                    if (index === 0) tempArr = [...tempArr, {id: a.id, value: i.value}]
                })
                return a
            })
            setStore({
                ...store,
                attributes: tempArr
            })
        }
    }, [prevProps, product, store])

    const price = product.prices.filter(p => p.currency.symbol === activeCurrency)

    if (!product) return <Preloader/>

    return <div className={s.body}>
        <div className={s.galleryAndImgContainer}>
            <div>{product.gallery.map((p, i) => {
                return <div key={i} className={s.productImgBtn} onClick={() => setStore({...store, productMainImg: p})}>
                    <img className={s.productImg} src={p} alt={product.name}/>
                </div>
            })}</div>
            <div className={s.mainImgContainer}>
                <img key={store.productMainImg} className={s.mainImg}
                     src={store.productMainImg} alt="mainProductImg"/>
            </div>
        </div>
        <div className={s.productDescriptionContainer}>
            <div className={s.productBrand}>{product.brand}</div>
            <div className={s.productName}>{product.name}</div>
            <div className={s.productAttributes}>{product.attributes.map((a, index) => {
                return <Attributes index={index} id={a.id} key={a.id} name={a.name} items={a.items} type={a.type}
                                   setAttributes={setAttributes} attributes={store.attributes}/>
            })}</div>
            <div className={s.attributeName}>Price:</div>
            <div className={s.price}>{activeCurrency}{price[0].amount}</div>
            <div className={product.inStock ? s.addToCartBtn : s.addToCartDisabledBtn} onClick={() => {
                if (product.inStock) addProduct(product.id, store.attributes)
            }}>Add to cart
            </div>
            <div className={s.productDescription}>{ReactHtmlParser(product.description)}</div>
        </div>
    </div>
}

export default Product