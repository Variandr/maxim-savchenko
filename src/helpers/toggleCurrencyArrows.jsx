import upArrow from "../assets/upArrow.svg"
import downArrow from "../assets/downArrow.svg"
import React from "react"

export const ToggleCurrencyArrows = ({isCurrencyOpened}) => {
    return isCurrencyOpened ? <div><img src={upArrow} alt='arrow'/></div> :
        <div><img src={downArrow} alt='arrow'/></div>
}