import s from "./currency.module.css"
import Currency from "./currency"
import React, {useState} from "react"
import {ToggleCurrencyArrows} from "../../helpers/toggleCurrencyArrows"

const CurrencyMain = ({isBagOpened, activeCurrency, setActiveCurrency, currencies}) => {
    const [isCurrencyOpened, setCurrencyOpened] = useState(false)
    const disabledButton = isBagOpened ? s.currencyBtnDisabled : ''

    return <div tabIndex="0" onBlur={() => setCurrencyOpened(false)}>
        <div className={s.currencyBtn + ' ' + disabledButton}
             onClick={() => {
                 if (!isBagOpened) setCurrencyOpened(!isCurrencyOpened)
             }}>{activeCurrency}</div>
        <div className={s.arrowCurrencyBtn}>
            <ToggleCurrencyArrows isCurrencyOpened={isCurrencyOpened}/>
        </div>
        {isCurrencyOpened &&
            <Currency currencies={currencies}
                      toggleCurrencyOpening={(isCurrencyOpened) => setCurrencyOpened(isCurrencyOpened)}
                      setActiveCurrency={setActiveCurrency}/>
        }
    </div>
}

export default CurrencyMain