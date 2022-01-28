import React, {PureComponent} from "react"
import s from './header.module.css'
import {NavLink} from "react-router-dom"
import logo from '../assets/logo.svg'
import bag from '../assets/cartBox.svg'
import BagContainer from "./bagCart/bagContainer"
import Currency from "./curencyValue/currency"
import {setActiveCurrency} from "../state/appReducer";

class Header extends PureComponent {
    state = {
        isCurrencyOpened: false
    }
    toggleCurrencyOpen = () => {
        this.setState({
            isCurrencyOpened: !this.state.isCurrencyOpened
        })
    }

    render() {
        return <div className={s.body}>
            <div className={s.navbar}>
                <NavLink className={({isActive}) =>
                    isActive ? s.activeButton : s.button} to={'/categories/all'}>All categories</NavLink>
                <NavLink className={({isActive}) =>
                    isActive ? s.activeButton : s.button} to={'/categories/clothes'}>Clothes</NavLink>
                <NavLink className={({isActive}) =>
                    isActive ? s.activeButton : s.button} to={'/categories/tech'}>Tech</NavLink>
            </div>
            <div className={s.logo}><img src={logo} alt='logo'/></div>
            <div className={s.currencyBtn} onClick={this.toggleCurrencyOpen}>{this.props.activeCurrency}</div>
            {this.state.isCurrencyOpened &&
                <Currency currencies={this.props.currencies} toggleCurrencyOpen={this.toggleCurrencyOpen}
                          setActiveCurrency={this.props.setActiveCurrency}/>}
            <div className={s.bagBtn} onClick={this.props.toggleBagOpen}>
                <img className={s.bag} src={bag} alt='bag'/>
                {this.props.productsLength > 0 && <div className={s.selectedProducts}>{this.props.productsLength}</div>}
            </div>
            {this.props.isBagOpened &&
                <BagContainer closeBag={this.props.toggleBagOpen} setSelectedProducts={this.setSelectedProducts}/>}
            <div className={this.props.isBagOpened ? s.coverAll : ''}></div>
        </div>
    }
}

export default Header