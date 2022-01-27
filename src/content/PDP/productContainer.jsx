import React, {PureComponent} from "react"
import {connect} from "react-redux"
import {getProductData} from "../../state/productReducer"
import Product from "./product"
import {compose} from "redux"
import withRouter from "../../HOC/withRouter"
import {addProduct} from "../../state/bagReducer"

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
        if(!this.props.product){
            return <></>
        }
        return <>
            <Product product={this.props.product} addProduct={this.props.addProduct}/>
        </>
    }
}

const mapStateToProps = (state) => ({
    product: state.productPage.product
})
export default compose(connect(mapStateToProps, {getProductData, addProduct}), withRouter)(ProductContainer)