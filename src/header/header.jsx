import React, {useState} from "react"
import s from './header.module.css'
import {NavLink} from "react-router-dom"
import logo from '../assets/logo.svg'
import bag from '../assets/cartBox.svg'
import Bag from "./bag/bag";

const Header = () => {
    let [isBagOpened, setBagOpening] = useState(false)
    const selectedProducts = 1;
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
        <div className={s.bagBtn} onClick={() => {setBagOpening(!isBagOpened)}}>
            <img className={s.bag} src={bag} alt='bag'/>
            {selectedProducts > 0 && <div className={s.selectedProducts}>{selectedProducts}</div>}
        </div>
        {isBagOpened && <Bag selectedProducts={selectedProducts}/>}
    </div>
}
export default Header