import React, {PureComponent} from "react"
import {connect} from "react-redux"
import CartPage from "./cartPage"
import {deleteProduct, setCount} from "../../state/bagReducer"
import {getActiveCurrency, getProducts} from "../../selectors/selectors"

class CartPageContainer extends PureComponent {
    render() {
        return <CartPage products={this.props.products}
                         activeCurrency={this.props.activeCurrency}
                         deleteProduct={this.props.deleteProduct}
                         setCount={this.props.setCount}/>
    }
}

const mapStateToProps = (state) => ({
    products: getProducts(state),
    activeCurrency: getActiveCurrency(state)
})
export default connect(mapStateToProps, {deleteProduct, setCount})(CartPageContainer)