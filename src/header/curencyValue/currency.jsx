import s from '../header.module.css'
const Currency = ({currencies,toggleCurrencyOpen, setActiveCurrency}) => {
    let getCurrencies = currencies.map(c => {
        return <div onClick={() => {
            toggleCurrencyOpen()
            setActiveCurrency(c.symbol)
        }
        } className={s.currencyBox} key={c.symbol}>{c.symbol} {c.label}</div>
    })
    return <div className={s.currenciesContainer}>
        {getCurrencies}
    </div>
}
export default Currency