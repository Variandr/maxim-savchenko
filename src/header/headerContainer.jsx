import React, {PureComponent} from "react"
import {connect} from "react-redux"
import Header from "./header"
import {setActiveCurrency} from "../state/appReducer"
import {getActiveCurrency, getCategories, getCurrencies, getProducts} from "../selectors/selectors"

class HeaderContainer extends PureComponent {
    render() {
        return <Header products={this.props.products}
                       toggleBagOpening={this.props.toggleBagOpening}
                       isBagOpened={this.props.isBagOpened}
                       currencies={this.props.currencies}
                       setActiveCurrency={this.props.setActiveCurrency}
                       activeCurrency={this.props.activeCurrency}
                       categories={this.props.categories}
        />
    }
}

const mapStateToProps = (state) => ({
    products: getProducts(state),
    currencies: getCurrencies(state),
    activeCurrency: getActiveCurrency(state),
    categories: getCategories(state)
})
export default connect(mapStateToProps, {setActiveCurrency})(HeaderContainer)