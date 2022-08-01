import React, {useEffect} from "react"
import {connect} from "react-redux"
import {getProductData} from "../../state/productReducer"
import Product from "./product"
import {compose} from "redux"
import withRouter from "../../helpers/withRouter"
import {addProduct} from "../../state/bagReducer"
import {getActiveCurrency, getLoadingProduct, getProduct} from "../../selectors/selectors"
import Preloader from "../../helpers/preloader"
import usePrevious from "../../helpers/usePrevious";

const ProductContainer = (props) => {
    useEffect(() => {
        props.getProductData(props.params.productId)
        if (!props.params.productId) {
            props.history.push('*')
        }
    }, [])

    const prevProps = usePrevious(props.params.productId)
    useEffect(() => {
            if (props.params.productId !== prevProps) {
                props.getProductData(props.params.productId)
            }
        }, [prevProps, props.params.productId]
    )

    if (props.isLoading || !props.product) {
        return <Preloader/>
    }

    return <Product product={props.product}
                    addProduct={props.addProduct}
                    activeCurrency={props.activeCurrency}/>
}

const mapStateToProps = (state) => ({
    product: getProduct(state),
    activeCurrency: getActiveCurrency(state),
    isLoading: getLoadingProduct(state)
})
export default compose(connect(mapStateToProps, {getProductData, addProduct}), withRouter)(ProductContainer)