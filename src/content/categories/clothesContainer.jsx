import React, {useEffect} from "react"
import Category from "./category/category"
import {connect} from "react-redux"
import {getProducts} from "../../state/clothesReducer";

const ClothesContainer = (props) => {
    useEffect(() => {
        props.getProducts()
    })
    return <Category {...props}/>
}
const mapStateToProps = (state) => ({
    name: state.clothesPage.name,
    products: state.clothesPage.products
})
export default connect(mapStateToProps, {getProducts})(ClothesContainer)