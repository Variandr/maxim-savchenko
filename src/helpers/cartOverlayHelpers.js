export const getCurrentPrice = (prices, activeCurrency) => {
    return prices.filter(p => p.currency.symbol === activeCurrency)
}