import React, {useEffect} from "react"
import {connect} from "react-redux"
import {getProducts} from "../../state/categoriesReducer"
import Category from "./category"
import {compose} from "redux"
import withRouter from "../../helpers/withRouter"
import {addProduct} from "../../state/bagReducer"
import {getActiveCurrency, getCategoryData} from "../../selectors/selectors"
import Preloader from "../../helpers/preloader"
import usePrevious from "../../helpers/usePrevious";

const CategoriesContainer = (props) => {
    useEffect(() => {
        props.getProducts(props.params.categoryId)
        if (!props.params.categoryId) {
            props.history.push('*')
        }
    }, [])

    const prevProps = usePrevious(props.params.categoryId)
    useEffect(() => {
        if (props.params.categoryId !== prevProps) {
            props.getProducts(props.params.categoryId)
        }
    }, [prevProps, props.params.categoryId])

    if (!props.categoryData) return <Preloader/>

    return <Category categoryData={props.categoryData}
                     addProduct={props.addProduct}
                     activeCurrency={props.activeCurrency}/>
}

const mapStateToProps = (state) => ({
    categoryData: getCategoryData(state),
    activeCurrency: getActiveCurrency(state)
})
export default compose(connect(mapStateToProps, {getProducts, addProduct}), withRouter)(CategoriesContainer)