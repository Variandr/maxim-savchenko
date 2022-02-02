import React, {PureComponent} from "react"
import s from './header.module.css'
import logo from '../assets/logo.svg'
import {navbarItemsCreator} from "../helpers/navbarItemsCreator"
import CurrencyMain from "./currencyOverlay/currencyMain"
import CartOverlayMain from "./cartOverlay/cartOverlayMain"

class Header extends PureComponent {
    render() {
        let menu = navbarItemsCreator(this.props.categories)
        return <div className={s.body}>
            <div className={s.navbar}>
                {menu}
            </div>
            <div className={s.logo}><img src={logo} alt='logo'/></div>
            <CurrencyMain isBagOpened={this.props.isBagOpened}
                          currencies={this.props.currencies}
                          setActiveCurrency={this.props.setActiveCurrency}
                          activeCurrency={this.props.activeCurrency}/>
            <CartOverlayMain isBagOpened={this.props.isBagOpened}
                             products={this.props.products}
                             toggleBagOpening={this.props.toggleBagOpening}/>
            <div className={this.props.isBagOpened ? s.coverAll : ''}/>
        </div>
    }
}

export default Header