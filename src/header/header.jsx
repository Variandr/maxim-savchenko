import React, {PureComponent} from "react"
import s from './header.module.css'
import {NavLink} from "react-router-dom"
import logo from '../assets/logo.svg'
import bag from '../assets/cartBox.svg'
import BagContainer from "./bagCart/bagContainer"

class Header extends PureComponent {
    state = {
        isBagOpened: false
    }
    closeBag = () => {
        this.setState({
            isBagOpened: false
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
            <div className={s.bagBtn} onClick={() => {
                this.setState({isBagOpened: !this.state.isBagOpened})
            }}>
                <img className={s.bag} src={bag} alt='bag'/>
                {this.props.productsLength > 0 && <div className={s.selectedProducts}>{this.props.productsLength}</div>}
            </div>
            {this.state.isBagOpened && <BagContainer closeBag={this.closeBag} setSelectedProducts={this.setSelectedProducts}/>}
            <div className={this.state.isBagOpened ? s.coverAll : ''}> </div>
        </div>
    }
}

export default Header