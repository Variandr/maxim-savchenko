import React, {PureComponent} from "react"
import {connect} from "react-redux"
import BagCart from "./bagCart";
import {deleteProduct, setCount} from "../../state/bagReducer"
import {getActiveCurrency, getProducts} from "../../selectors/selectors"

class BagCartContainer extends PureComponent {
    render() {
        return <BagCart products={this.props.products}
                        closeBag={this.props.closeBag}
                        activeCurrency={this.props.activeCurrency}
                        deleteProduct={this.props.deleteProduct}
                        setCount={this.props.setCount}
        />
    }
}

const mapStateToProps = (state) => ({
    products: getProducts(state),
    activeCurrency: getActiveCurrency(state)
})
export default connect(mapStateToProps, {deleteProduct, setCount})(BagCartContainer)