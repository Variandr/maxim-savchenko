import React, {PureComponent} from "react"
import {connect} from "react-redux"
import {getProducts} from "../../state/categoriesReducer"
import Category from "./category"
import {compose} from "redux"
import withRouter from "../../HOC/withRouter"
import {addProduct} from "../../state/bagReducer"

class CategoriesContainer extends PureComponent {
    componentDidMount() {
        let categoryId = this.props.params.categoryId
        this.props.getProducts(categoryId)
        if (!categoryId) {
            this.props.history.push('*')
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.params.categoryId !== prevProps.params.categoryId) {
            this.props.getProducts(this.props.params.categoryId)
        }
    }

    render() {
        return <Category products={this.props.products}
                         name={this.props.name}
                         addProduct={this.props.addProduct}
                         activeCurrency={this.props.activeCurrency}
        />
    }
}

const mapStateToProps = (state) => ({
    name: state.categoriesPage.name,
    products: state.categoriesPage.products,
    activeCurrency: state.app.activeCurrency
})
export default compose(connect(mapStateToProps, {getProducts, addProduct}), withRouter)(CategoriesContainer)