import React, {PureComponent} from "react"
import {connect} from "react-redux"
import Header from "./header"

class HeaderContainer extends PureComponent {
    render() {
        return <Header productsLength={this.props.productsLength}/>
    }
}

const mapStateToProps = (state) => ({
    productsLength: state.bagPage.products.length
})
export default connect(mapStateToProps, {})(HeaderContainer)