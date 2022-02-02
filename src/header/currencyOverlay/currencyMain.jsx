import s from "./currency.module.css"
import Currency from "./currency"
import React, {PureComponent} from "react"
import {ToggleCurrencyArrows} from "../../helpers/toggleCurrencyArrows"

class CurrencyMain extends PureComponent {
    state = {
        isCurrencyOpened: false
    }
    toggleCurrencyOpening = (isCurrencyOpened) => {
        this.setState({
            isCurrencyOpened: isCurrencyOpened
        })
    }

    render() {
        let CloseCurrencyTabOnBlur = () => this.toggleCurrencyOpening(false)
        let toggleCurrencyOnClick = () => {
            if (!isBagOpened) this.toggleCurrencyOpening(!this.state.isCurrencyOpened)
        }
        let {isBagOpened, activeCurrency, setActiveCurrency, currencies} = this.props;
        let disabledButton = isBagOpened ? s.currencyBtnDisabled : ''
        return <div tabIndex="0" onBlur={CloseCurrencyTabOnBlur}>
            <div className={s.currencyBtn + ' ' + disabledButton}
                 onClick={toggleCurrencyOnClick}>{activeCurrency}</div>
            <div className={s.arrowCurrencyBtn}>
                <ToggleCurrencyArrows isCurrencyOpened={this.state.isCurrencyOpened}/>
            </div>
            {this.state.isCurrencyOpened &&
                <Currency currencies={currencies}
                          toggleCurrencyOpening={this.toggleCurrencyOpening}
                          setActiveCurrency={setActiveCurrency}/>
            }
        </div>
    }
}

export default CurrencyMain