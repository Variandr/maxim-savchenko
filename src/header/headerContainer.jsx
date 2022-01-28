import React, {PureComponent} from "react"
import {connect} from "react-redux"
import Header from "./header"
import {setActiveCurrency} from "../state/appReducer"

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
    productsLength: state.bagPage.products.length,
    currencies: state.app.currencies,
    activeCurrency: state.app.activeCurrency
})
export default connect(mapStateToProps, {setActiveCurrency})(HeaderContainer)