import React, {PureComponent} from "react"
import {connect} from "react-redux"
import {getProducts} from "../../state/categoriesReducer"
import Category from "./category"
import {compose} from "redux"
import withRouter from "../../HOC/withRouter"
import {addProduct} from "../../state/bagReducer"
import {getActiveCurrency, getCategoryData} from "../../selectors/selectors"
import Preloader from "../../helpers/preloader"

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
        if (!this.props.categoryData) return <Preloader/>
        return <Category categoryData={this.props.categoryData}
                         addProduct={this.props.addProduct}
                         activeCurrency={this.props.activeCurrency}/>
    }
}

const mapStateToProps = (state) => ({
    categoryData: getCategoryData(state),
    activeCurrency: getActiveCurrency(state)
})
export default compose(connect(mapStateToProps, {getProducts, addProduct}), withRouter)(CategoriesContainer)