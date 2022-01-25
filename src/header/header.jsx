import React from "react"
import s from './header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return <div className={s.body}>
        <div className={s.navbar}>
            <NavLink className={({isActive}) =>
                isActive ? s.activeButton : s.button} to={'/categories/'}>All categories</NavLink>
            <NavLink className={({isActive}) =>
                isActive ? s.activeButton : s.button} to={'/categories/clothes'}>Clothes</NavLink>
            <NavLink className={({isActive}) =>
                isActive ? s.activeButton : s.button} to={'/categories/tech'}>Tech</NavLink>
        </div>
    </div>
}
export default Header