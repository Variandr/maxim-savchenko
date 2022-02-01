import React, {PureComponent} from "react"
import s from './header.module.css'
import {NavLink} from "react-router-dom"
import logo from '../assets/logo.svg'
import bag from '../assets/cartBox.svg'
import BagContainer from "./bagCart/bagContainer"
import Currency from "./curencyValue/currency"
import upArrow from '../assets/upArrow.svg'
import downArrow from '../assets/downArrow.svg'

class Header extends PureComponent {
    state = {
        isCurrencyOpened: false
    }
    toggleCurrencyOpening = (isCurrencyOpened) => {
        this.setState({
            isCurrencyOpened: isCurrencyOpened
        })
    }

    render() {
        let productsLength = 0
        if (this.props.products) {
            this.props.products.map(p => {
                productsLength += p.count
                return p
            })
        }
        let menu = this.props.categories.map(c => {
            return <NavLink key={c.name} className={({isActive}) =>
                isActive ? s.activeButton : s.button} to={'/categories/' + c.name}>{c.name}</NavLink>
        })
        return <div className={s.body}>
            <div className={s.navbar}>
                {menu}
            </div>
            <div className={s.logo}><img src={logo} alt='logo'/></div>
            <div tabIndex="0" onBlur={() => this.toggleCurrencyOpening(false)}>
                <div className={s.currencyBtn + ' ' + (this.props.isBagOpened ? s.currencyBtnDisabled : '')}
                     onClick={() => {
                         if (!this.props.isBagOpened) this.toggleCurrencyOpening(true)
                     }}>{this.props.activeCurrency}</div>
                <div className={s.arrowCurrencyBtn}>
                    {this.state.isCurrencyOpened ? <div><img src={upArrow} alt='arrow'/></div> :
                        <div><img src={downArrow} alt='arrow'/></div>}
                </div>
                {this.state.isCurrencyOpened &&
                    <Currency currencies={this.props.currencies} toggleCurrencyOpening={this.toggleCurrencyOpening}
                              setActiveCurrency={this.props.setActiveCurrency}/>
                }
            </div>
            <div tabIndex="0" onBlur={() => setTimeout(() => this.props.toggleBagOpening(false), 200)}>
                <div className={s.bagBtn} onClick={() => this.props.toggleBagOpening(!this.props.isBagOpened)}>
                    <img className={s.bag} src={bag} alt='bag'/>
                    {productsLength > 0 &&
                        <div className={s.selectedProducts}>{productsLength}</div>}
                </div>
                {this.props.isBagOpened &&
                    <BagContainer toggleBagOpening={this.props.toggleBagOpening}
                                  setSelectedProducts={this.setSelectedProducts}
                                  productsLength={productsLength}/>}
            </div>
            <div className={this.props.isBagOpened ? s.coverAll : ''}/>
        </div>
    }
}

export default Header