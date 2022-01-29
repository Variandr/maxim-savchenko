import React, {PureComponent} from "react"
import s from './bag.module.css'
import BagItem from "./bagItem"
import {NavLink} from "react-router-dom"

class BagCart extends PureComponent {
    state = {
        productsCount: []
    }
    defaultArray = () => {
        let a = []
        this.props.products.map(p => {
            a.push(p.count)
        })
        this.setState({
            productsCount: [...this.state.productsCount, ...a]
        })
    }

    componentDidMount() {
        this.defaultArray()
    }

    counterPlus = (id) => {
        this.setState({
            productsCount: this.state.productsCount.map((p, index) => {
                if (index === id) return p += 1
                return p
            })
        })
    }
    counterMinus = (id) => {
        this.setState({
            productsCount: this.state.productsCount.map((p, index) => {
                if (index === id) return p -= 1
                return p
            })
        })
    }

    render() {
        let {products, activeCurrency, deleteProduct, setCount} = this.props;
        let totalPrice = 0
        let bagItems = products.map((p, index) => {
            let price = p.productData.prices.filter(p => p.currency.symbol === activeCurrency)
            totalPrice += price[0].amount * this.state.productsCount[index]
            return <BagItem id={index} count={this.state.productsCount[index]}
                            setCount={setCount}
                            counterPlus={this.counterPlus}
                            counterMinus={this.counterMinus}
                            key={p.id} name={p.productData.name}
                            brand={p.productData.brand} photo={p.productData.gallery[0]}
                            chosenAttributes={p.chosenAttributes}
                            attributes={p.productData.attributes}
                            productId={p.id}
                            uniqueItemId={p.uniqueItemId}
                            price={price[0].amount}
                            deleteProduct={deleteProduct}
                            activeCurrency={activeCurrency}/>
        })
        return <div className={s.bag}>
            <div className={s.bagHeader}><b>My bag,</b> {products.length} {products.length === 1 ? "item" : "items"}
            </div>
            <div>{bagItems}</div>
            <div className={s.totalContainer}><span className={s.totalName}>Total</span><span
                className={s.totalPrice}>{activeCurrency}{totalPrice.toFixed(2)}</span></div>
            <div className={s.bagButtons}>
                <NavLink to={"/basket"} className={s.navLink}>
                    <div className={s.viewBagBtn} onClick={() => this.props.closeBag()}>View bag</div>
                </NavLink>
                <div className={s.checkOutBtn}>Check out</div>
            </div>
        </div>
    }
}

export default BagCart