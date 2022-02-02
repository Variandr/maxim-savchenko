import s from './cartPage.module.css'
import React, {PureComponent} from "react"
import Attributes from "../PDP/attribute"
import {getCurrentPrice} from "../../helpers/cartOverlayHelpers"
import CartPageItemImage from "./cartPageItemImage"

class CartPageItem extends PureComponent {
    state = {
        count: this.props.count,
        imgId: 0
    }
    counterPlus = () => {
        this.setState({count: this.state.count + 1})
        this.props.setCount(this.state.count + 1, this.props.uniqueItemId)
    }
    counterMinus = () => {
        if (this.state.count > 1) {
            this.setState({count: this.state.count - 1})
            this.props.setCount(this.state.count - 1, this.props.uniqueItemId)
        }
    }
    swapImageToRight = () => {
        if (this.state.imgId < this.props.productData.gallery.length - 1) {
            this.setState({
                imgId: this.state.imgId + 1
            })
        }
    }
    swapImageToLeft = () => {
        if (this.state.imgId > 0) {
            this.setState({
                imgId: this.state.imgId - 1
            })
        }
    }

    render() {
        let {
            productData: {name, brand, gallery, attributes, prices},
            activeCurrency, chosenAttributes, uniqueItemId, deleteProduct
        } = this.props;
        let getAttributes = attributes.map((a, index) => {
            return <Attributes index={index}
                               key={a.id}
                               items={a.items}
                               type={a.type}
                               name={a.name}
                               attributes={chosenAttributes}/>
        })
        let deleteProductOnClick = () => deleteProduct(uniqueItemId)
        let price = getCurrentPrice(prices, activeCurrency)
        return <div className={s.bagContainer}>
            <div>
                <div className={s.cartBrand}>{brand}</div>
                <div className={s.cartName}>{name}</div>
                <div className={s.cartPrice}>{activeCurrency}{price[0].amount}</div>
                <div>{getAttributes}</div>
            </div>
            <div className={s.imgAndCounterContainer}>
                <div className={s.counterContainer}>
                    <div className={s.counter} onClick={this.counterPlus}>+</div>
                    <div className={s.countNum}>{this.state.count}</div>
                    <div className={s.counter} onClick={this.counterMinus}>-</div>
                </div>
                <CartPageItemImage gallery={gallery}
                                   swapImageToLeft={this.swapImageToLeft}
                                   swapImageToRight={this.swapImageToRight}
                                   imgId={this.state.imgId}/>
                <div className={s.deleteBtn} onClick={deleteProductOnClick}>X</div>
            </div>
        </div>
    }
}

export default CartPageItem