import React from "react"
import {connect} from "react-redux"
import CartOverlay from "./cartOverlay";
import {deleteProduct, setCount} from "../../state/bagReducer"
import {getActiveCurrency, getProducts} from "../../selectors/selectors"

const CartOverlayContainer = (props) => {
    return <CartOverlay products={props.products}
                        toggleBagOpening={props.toggleBagOpening}
                        activeCurrency={props.activeCurrency}
                        deleteProduct={props.deleteProduct}
                        setCount={props.setCount}
                        productsLength={props.productsLength}
    />
}

const mapStateToProps = (state) => ({
    products: getProducts(state),
    activeCurrency: getActiveCurrency(state)
})
export default connect(mapStateToProps, {deleteProduct, setCount})(CartOverlayContainer)