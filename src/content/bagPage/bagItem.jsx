import s from './bagPage.module.css'
import React, {Component} from "react"
import Attributes from "../PDP/attribute"
import leftArrow from '../../assets/leftArrow.svg'
import rightArrow from '../../assets/rightArrow.svg'

class BagItem extends Component {
    state = {
        count: this.props.count,
        imgId: 0
    }

    render() {
        let {
            name,
            brand,
            gallery,
            attributes,
            activeCurrency,
            prices,
            chosenAttributes,
            uniqueItemId,
            deleteProduct,
            setCount
        } = this.props;
        let getAttributes = attributes.map((a, index) => {
            return <Attributes index={index} key={a.id} items={a.items} type={a.type}
                               attributes={chosenAttributes}/>
        })
        let price = prices.filter(p => p.currency.symbol === activeCurrency)
        return <div className={s.bagContainer}>
            <div>
                <div className={s.cartName}>{name}</div>
                <div className={s.cartBrand}>{brand}</div>
                <div className={s.cartPrice}>{activeCurrency}{price[0].amount}</div>
                <div>{getAttributes}</div>
            </div>
            <div className={s.imgAndCounterContainer}>
                <div className={s.counterContainer}>
                    <div className={s.counter} onClick={() => {
                        this.setState({count: this.state.count += 1})
                        setCount(this.state.count, uniqueItemId)
                    }}>+
                    </div>
                    <div className={s.countNum}>{this.state.count}</div>
                    <div className={s.counter}
                         onClick={() => {
                             if (this.state.count > 1) {
                                 this.setState({count: this.state.count -= 1})
                                 setCount(this.state.count, uniqueItemId)
                             }
                         }
                         }>-
                    </div>
                </div>
                <div>
                    {gallery.length > 1 &&
                    <div className={s.leftArrowBtn} onClick={() => {
                        if (this.state.imgId > 0) {
                            this.setState({
                                imgId: this.state.imgId -= 1
                            })
                        }
                    }}>
                        <img src={leftArrow} alt='arrowBtn'/></div>
                    }
                    <img className={s.cartImg} src={this.props.gallery[this.state.imgId]} alt='bagItemPhoto'/>
                    {gallery.length > 1 &&
                    <div className={s.rightArrowBtn} onClick={() => {
                        if (this.state.imgId < gallery.length - 1) {
                            this.setState({
                                imgId: this.state.imgId += 1
                            })
                        }
                    }}>
                        <img src={rightArrow} alt='arrowBtn'/></div>
                    }
                </div>
                <div className={s.deleteBtn} onClick={() => deleteProduct(uniqueItemId)}>X</div>
            </div>
        </div>
    }
}

export default BagItem