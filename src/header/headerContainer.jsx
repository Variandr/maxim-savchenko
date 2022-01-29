import React, {PureComponent} from "react"
import {connect} from "react-redux"
import Header from "./header"
import {setActiveCurrency} from "../state/appReducer"
import {getActiveCurrency, getCurrencies, getProducts} from "../selectors/selectors"

class HeaderContainer extends PureComponent {
    render() {
        return <Header productsLength={this.props.productsLength}
                       toggleBagOpen={this.props.toggleBagOpen}
                       isBagOpened={this.props.isBagOpened}
                       currencies={this.props.currencies}
                       setActiveCurrency={this.props.setActiveCurrency}
                       activeCurrency={this.props.activeCurrency}
        />
    }
}

const mapStateToProps = (state) => ({
    productsLength: getProducts(state).length,
    currencies: getCurrencies(state),
    activeCurrency: getActiveCurrency(state)
})
export default connect(mapStateToProps, {setActiveCurrency})(HeaderContainer)