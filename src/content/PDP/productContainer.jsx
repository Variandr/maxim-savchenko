import React, {PureComponent} from "react"
import {connect} from "react-redux"
import {getProductData} from "../../state/productReducer"
import Product from "./product"
import {compose} from "redux"
import withRouter from "../../HOC/withRouter"
import {addProduct} from "../../state/bagReducer"
import {getActiveCurrency, getLoadingProduct, getProduct} from "../../selectors/selectors"
import Preloader from "../../helpers/preloader";

class ProductContainer extends PureComponent {
    componentDidMount() {
        this.props.getProductData(this.props.params.productId)
        if (!this.props.params.productId) {
            this.props.history.push('*')
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.params.productId !== prevProps.params.productId) {
            this.props.getProductData(this.props.params.productId)
        }
    }

    render() {
        if (this.props.isLoading || !this.props.product) {
            return <Preloader/>
        }
        return <Product product={this.props.product}
                     addProduct={this.props.addProduct}
                     activeCurrency={this.props.activeCurrency}
            />
    }
}

const mapStateToProps = (state) => ({
    product: getProduct(state),
    activeCurrency: getActiveCurrency(state),
    isLoading: getLoadingProduct(state)
})
export default compose(connect(mapStateToProps, {getProductData, addProduct}), withRouter)(ProductContainer)