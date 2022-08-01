import React from "react"
import {connect} from "react-redux"
import Header from "./header"
import {setActiveCurrency} from "../state/appReducer"
import {getActiveCurrency, getCategories, getCurrencies, getProducts} from "../selectors/selectors"

const HeaderContainer = ({
                             products,
                             toggleBagOpening,
                             isBagOpened,
                             currencies,
                             setActiveCurrency,
                             activeCurrency,
                             categories
                         }) => {
    return <Header products={products}
                   toggleBagOpening={toggleBagOpening}
                   isBagOpened={isBagOpened}
                   currencies={currencies}
                   setActiveCurrency={setActiveCurrency}
                   activeCurrency={activeCurrency}
                   categories={categories}/>
}

const mapStateToProps = (state) => ({
    products: getProducts(state),
    currencies: getCurrencies(state),
    activeCurrency: getActiveCurrency(state),
    categories: getCategories(state)
})
export default connect(mapStateToProps, {setActiveCurrency})(HeaderContainer)