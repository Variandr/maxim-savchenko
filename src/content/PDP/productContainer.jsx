import React, {PureComponent} from "react"
import {connect} from "react-redux"
import {getProductData} from "../../state/productReducer"
import Product from "./product"
import {compose} from "redux"
import withRouter from "../../HOC/withRouter"

class ProductContainer extends PureComponent {
    componentDidMount() {
        let productId = this.props.params.productId
        this.props.getProductData(productId)
        if (!productId) {
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
            <Product product={this.props.product}/>
        </>
    }
}

const mapStateToProps = (state) => ({
    product: state.productPage.product
})
export default compose(connect(mapStateToProps, {getProductData}), withRouter)(ProductContainer)