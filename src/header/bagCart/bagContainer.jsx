import React, {PureComponent} from "react"
import {connect} from "react-redux"
import BagCart from "./bagCart";

class BagCartContainer extends PureComponent {
    render() {
        return <BagCart products={this.props.products} closeBag={this.props.closeBag}/>
    }
}

const mapStateToProps = (state) => ({
    products: state.bagPage.products
})
export default connect(mapStateToProps, {})(BagCartContainer)