import s from '../header.module.css'

const Currency = ({currencies, toggleCurrencyOpening, setActiveCurrency}) => {

    let getCurrencies = currencies.map(c => {
        return <div onClick={() => {
            toggleCurrencyOpening(false)
            setActiveCurrency(c.symbol)
        }
        } className={s.currencyBox} key={c.symbol}>{c.symbol} {c.label}</div>
    })
    return <div className={s.currenciesContainer}>
        {getCurrencies}
    </div>
}
export default Currency