import React, {PureComponent} from "react"
import s from './product.module.css'
import Attribute from "./attribute"

class Product extends PureComponent {
    state = {
        productMainImg: null,
        attributes: []
    }
    setImage = (image) => {
        this.setState({
            productMainImg: image
        })
    }
    setAttributes = (attribute, id) => {
        if (!this.state.attributes.length) {
            this.setState({
                attributes: [...this.state.attributes, {id, attribute}]
            })
        } else {
            let isFoundById = false;
            this.setState({
                attributes: this.state.attributes.map(a => {
                    if (a.id === id) {
                        isFoundById = true;
                        return {id, attribute}
                    }
                    return a
                })
            })
            if (!isFoundById) {
                this.setState({
                    attributes: [...this.state.attributes, {id, attribute}]
                })
            }
        }
    }

    componentDidMount() {
        this.setImage(this.props.product.gallery[0])
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.product !== prevProps.product) {
            this.setImage(this.props.product.gallery[0])
        }
    }

    render() {
        let {product, addProduct} = this.props
        // console.log(product)
        let gallery = product.gallery.map((p, i) => {
            return <div key={i} className={s.productImgBtn} onClick={() => this.setImage(p)}>
                <img className={s.productImg} src={p} alt={product.name}/>
            </div>
        })
        let attributes = product.attributes.map(a => {
            return <Attribute id={a.id} key={a.id} name={a.name} items={a.items} type={a.type}
                              setAttributes={this.setAttributes}/>
        })
        return <div className={s.body}>
            <div>{gallery}</div>
            <div><img key={this.state.productMainImg} className={s.mainImg} src={this.state.productMainImg}
                      alt="mainProductImg"/></div>
            <div>
                <div className={s.productName}>{product.name}</div>
                <div className={s.productBrand}>{product.brand}</div>
                <div className={s.productAttributes}>{attributes}</div>
                <div className={s.addToCartBtn}
                     onClick={() => addProduct(product.id, product.name, product.brand, product.gallery[0], this.state.attributes)}>Add
                    to cart
                </div>
                <div className={s.productDescription} dangerouslySetInnerHTML={{__html: product.description}}>{}</div>
            </div>
        </div>
    }
}

export default Product