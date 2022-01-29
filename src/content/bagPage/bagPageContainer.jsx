import React, {PureComponent} from "react"
import {connect} from "react-redux"
import BagPage from "./bagPage"
import {deleteProduct, setCount} from "../../state/bagReducer"

class BagPageContainer extends PureComponent {
    render() {
        return <BagPage products={this.props.products}
                        activeCurrency={this.props.activeCurrency}
                        deleteProduct={this.props.deleteProduct}
                        setCount={this.props.setCount}
        />
    }
}

const mapStateToProps = (state) => ({
    products: state.bagPage.products,
    activeCurrency: state.app.activeCurrency
})
export default connect(mapStateToProps, {deleteProduct, setCount})(BagPageContainer)