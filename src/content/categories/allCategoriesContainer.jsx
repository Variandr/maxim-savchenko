import React, {PureComponent} from "react"
import Category from "./category/category"
import {connect} from "react-redux"
import {getProducts} from "../../state/allCategoriesReducer"

class AllCategoriesContainer extends PureComponent {
    componentDidMount() {
        this.props.getProducts()
    }

    render() {
        return <Category {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    name: state.allCategoriesPage.name,
    products: state.allCategoriesPage.products
})
export default connect(mapStateToProps, {getProducts})(AllCategoriesContainer)