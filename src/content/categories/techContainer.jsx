import React, {PureComponent} from "react"
import {connect} from "react-redux"
import {getProducts} from "../../state/techReducer"
import Category from "./category/category"

class TechContainer extends PureComponent {
    componentDidMount() {
            this.props.getProducts()
    }

    render() {

        return <Category {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    name: state.techPage.name,
    products: state.techPage.products
})
export default connect(mapStateToProps, {getProducts})(TechContainer)