import React, {useEffect} from "react"
import {connect} from "react-redux"
import {getProducts} from "../../state/techReducer";
import Category from "./category/category";

const TechContainer = (props) => {
    useEffect(() => {
        props.getProducts()
    })
    return <Category {...props}/>
}
const mapStateToProps = (state) => ({
    name: state.techPage.name,
    products: state.techPage.products
})
export default connect(mapStateToProps, {getProducts})(TechContainer)