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
        for (let i = 0; i < this.props.products.length; i++) {
            a.push(1)
        }
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
        let {products, activeCurrency} = this.props;
        let totalPrice = 0
        let bagItems = products.map((p, index) => {
            let price =  p.prices.filter(p => p.currency.symbol === activeCurrency)
            totalPrice += price[0].amount * this.state.productsCount[index]
            return <BagItem id={index} count={this.state.productsCount[index]} counterPlus={this.counterPlus}
                            counterMinus={this.counterMinus} key={p.id} name={p.name} brand={p.brand} photo={p.photo}
                            attributes={p.attributes} price={price[0].amount} activeCurrency={activeCurrency}/>
        })
        return <div className={s.bag}>
            <div className={s.bagHeader}><b>My
                bag,</b> {products.length} {products.length === 1 ? "item" : "items"}</div>
            <div>{bagItems}</div>
            <div className={s.totalContainer}><span className={s.totalName}>Total</span><span className={s.totalPrice}>{activeCurrency}{totalPrice}</span></div>
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