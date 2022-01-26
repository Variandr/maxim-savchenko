import React, {PureComponent} from "react"
import Category from "./category/category"
import {connect} from "react-redux"
import {getProducts} from "../../state/clothesReducer"

class ClothesContainer extends PureComponent {
    componentDidMount() {
        this.props.getProducts()
    }

    render() {

        return <Category {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    name: state.clothesPage.name,
    products: state.clothesPage.products
})
export default connect(mapStateToProps, {getProducts})(ClothesContainer)