import React from "react"
import s from './header.module.css'
import logo from '../assets/logo.svg'
import {navbarItemsCreator} from "../helpers/navbarItemsCreator"
import CurrencyMain from "./currencyOverlay/currencyMain"
import CartOverlayMain from "./cartOverlay/cartOverlayMain"

const Header = ({
                    products,
                    toggleBagOpening,
                    isBagOpened,
                    currencies,
                    setActiveCurrency,
                    activeCurrency,
                    categories
                }) => {
    const menu = navbarItemsCreator(categories)

    return <div className={s.body}>
        <div className={s.navbar}>{menu}</div>
        <div className={s.logo}><img src={logo} alt='logo'/></div>
        <CurrencyMain isBagOpened={isBagOpened}
                      currencies={currencies}
                      setActiveCurrency={setActiveCurrency}
                      activeCurrency={activeCurrency}/>
        <CartOverlayMain isBagOpened={isBagOpened} products={products} toggleBagOpening={toggleBagOpening}/>
        <div className={isBagOpened ? s.coverAll : ''}/>
    </div>
}

export default Header