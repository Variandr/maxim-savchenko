import {NavLink} from "react-router-dom"
import s from "../header/header.module.css"
import React from "react"

export const navbarItemsCreator = (categories) => {
    return categories.map(c => {
        return <NavLink key={c.name} className={({isActive}) =>
            isActive ? s.activeButton : s.button} to={'/categories/' + c.name}>{c.name}</NavLink>
    })
}