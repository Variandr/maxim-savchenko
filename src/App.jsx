import React, {useEffect, useState} from "react"
import s from './App.module.css'
import {Navigate, Route, Routes} from "react-router-dom"
import CategoriesContainer from "./content/categories/categoriesContainer"
import ProductContainer from "./content/PDP/productContainer"
import BagPageContainer from "./content/cartPage/cartPageContainer"
import HeaderContainer from "./header/headerContainer"
import {connect} from "react-redux"
import {initializeApp} from "./state/appReducer"
import Preloader from "./helpers/preloader"
import {getCategories, getInitialize} from "./selectors/selectors"


const App = (props) => {
    useEffect(() => {
        props.initializeApp()

    }, [])

    const [bagOpened, setBagOpened] = useState(false)

    if (!props.isInitialized) {
        return <Preloader/>
    }
    const firstCategory = props.categories[0].name
    const hideOverflow = bagOpened ? s.overflowHidden : ''

    return <div className={s.app + ' ' + hideOverflow}>
        <HeaderContainer
            toggleBagOpening={(value) => setBagOpened(value)}
            isBagOpened={bagOpened}/>
        <Routes>
            <Route path='/' element={<Navigate to={"/categories/" + firstCategory}/>}/>
            <Route path='categories/:categoryId' element={<CategoriesContainer/>}/>
            <Route path='product/:productId' element={<ProductContainer/>}/>
            <Route path='/basket' element={<BagPageContainer/>}/>
            <Route path='*' element={<div className={s.error}><h1>404 Page not found</h1></div>}/>
        </Routes>
    </div>
}

const mapStateToProps = (state) => ({
    isInitialized: getInitialize(state),
    categories: getCategories(state)
})
export default connect(mapStateToProps, {initializeApp})(App);
