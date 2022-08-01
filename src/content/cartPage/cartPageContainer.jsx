import React from "react"
import {connect} from "react-redux"
import CartPage from "./cartPage"
import {deleteProduct, setCount} from "../../state/bagReducer"
import {getActiveCurrency, getProducts} from "../../selectors/selectors"

const CartPageContainer = (props) => {
    return <CartPage products={props.products}
                     activeCurrency={props.activeCurrency}
                     deleteProduct={props.deleteProduct}
                     setCount={props.setCount}/>
}

const mapStateToProps = (state) => ({
    products: getProducts(state),
    activeCurrency: getActiveCurrency(state)
})
export default connect(mapStateToProps, {deleteProduct, setCount})(CartPageContainer)