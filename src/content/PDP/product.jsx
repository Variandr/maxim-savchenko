import React, {PureComponent} from "react"
import s from './product.module.css'
import Attributes from "./attribute"
import Preloader from "../../helpers/preloader"

class Product extends PureComponent {
    state = {
        productMainImg: null,
        attributes: null
    }
    setImage = (image) => {
        this.setState({
            productMainImg: image
        })
    }
    setAttributes = (value, id) => {
        let isFoundById = false;
        this.setState({
            attributes: this.state.attributes.map(a => {
                if (a.id === id) {
                    isFoundById = true;
                    return {id, value}
                }
                return a
            })
        })
        if (!isFoundById) {
            this.setState({
                attributes: [...this.state.attributes, {id, value}]
            })
        }
    }

    componentDidMount() {
        this.setImage(this.props.product.gallery[0])
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.product !== prevProps.product) {
            this.setImage(this.props.product.gallery[0])
            this.setState({
                attributes: null
            })
        }
        if (!this.state.attributes) {
            let tempArr = []
            this.props.product.attributes.map(a => {
                a.items.forEach((i, index) => {
                    if (index === 0) tempArr = [...tempArr, {id: a.id, value: i.value}]
                })
            })
            this.setState({
                attributes: tempArr
            })
        }
    }

    render() {
        let {product, addProduct, activeCurrency} = this.props
        if(!product) return <Preloader/>
        let price = product.prices.filter(p => p.currency.symbol === activeCurrency)
        let gallery = product.gallery.map((p, i) => {
            return <div key={i} className={s.productImgBtn} onClick={() => this.setImage(p)}>
                <img className={s.productImg} src={p} alt={product.name}/>
            </div>
        })
        let attributes = product.attributes.map((a, index) => {
            return <Attributes index={index} id={a.id} key={a.id} name={a.name} items={a.items} type={a.type}
                               setAttributes={this.setAttributes} attributes={this.state.attributes}/>
        })
        return <div className={s.body}>
            <div>{gallery}</div>
            <div><img key={this.state.productMainImg} className={s.mainImg} src={this.state.productMainImg}
                      alt="mainProductImg"/></div>
            <div>
                <div className={s.productName}>{product.name}</div>
                <div className={s.productBrand}>{product.brand}</div>
                <div className={s.productAttributes}>{attributes}</div>
                <div className={s.attributeName}>Price:</div>
                <div className={s.price}>{activeCurrency}{price[0].amount}</div>
                <div className={product.inStock ? s.addToCartBtn : s.addToCartDisabledBtn} onClick={() => {
                    if (product.inStock) addProduct(product.id, this.state.attributes)
                }}>Add to
                    cart
                </div>
                <div className={s.productDescription} dangerouslySetInnerHTML={{__html: product.description}}/>
            </div>
        </div>
    }
}

export default Product