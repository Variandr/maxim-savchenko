import React, {useEffect} from "react"
import Category from "./category/category"
import {connect} from "react-redux"
import {getProducts} from "../../state/allCategoriesReducer";

const AllCategoriesContainer = (props) => {
    useEffect(() => {
        props.getProducts()
    })
    return <Category {...props}/>
}
const mapStateToProps = (state) => ({
    name: state.allCategoriesPage.name,
    products: state.allCategoriesPage.products
})
export default connect(mapStateToProps, {getProducts})(AllCategoriesContainer)