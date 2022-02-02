import React, {PureComponent} from "react"
import {connect} from "react-redux"
import CartOverlay from "./cartOverlay";
import {deleteProduct, setCount} from "../../state/bagReducer"
import {getActiveCurrency, getProducts} from "../../selectors/selectors"

class CartOverlayContainer extends PureComponent {
    render() {
        return <CartOverlay products={this.props.products}
                            toggleBagOpening={this.props.toggleBagOpening}
                            activeCurrency={this.props.activeCurrency}
                            deleteProduct={this.props.deleteProduct}
                            setCount={this.props.setCount}
                            productsLength={this.props.productsLength}
        />
    }
}

const mapStateToProps = (state) => ({
    products: getProducts(state),
    activeCurrency: getActiveCurrency(state)
})
export default connect(mapStateToProps, {deleteProduct, setCount})(CartOverlayContainer)