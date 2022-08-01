import s from './currency.module.css'

const Currency = ({currencies, toggleCurrencyOpening, setActiveCurrency}) => {
    return <div className={s.currenciesContainer}>
        {currencies.map(c => {
            return <div onClick={() => {
                toggleCurrencyOpening(false)
                setActiveCurrency(c.symbol)
            }
            } className={s.currencyBox} key={c.symbol}>{c.symbol} {c.label}</div>
        })}
    </div>
}
export default Currency