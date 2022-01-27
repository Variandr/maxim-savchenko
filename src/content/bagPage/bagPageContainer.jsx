import React, {PureComponent} from "react"
import {connect} from "react-redux"
import BagPage from "./bagPage";

class BagPageContainer extends PureComponent {
    render() {
        return <BagPage products={this.props.products}/>
    }
}

const mapStateToProps = (state) => ({
    products: state.bagPage.products
})
export default connect(mapStateToProps, {})(BagPageContainer)