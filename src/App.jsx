import React, {PureComponent} from "react"
import s from './App.module.css'
import {Route, Routes, Navigate} from "react-router-dom"
import CategoriesContainer from "./content/categories/categoriesContainer"
import ProductContainer from "./content/PDP/productContainer"
import BagPageContainer from "./content/bagPage/bagPageContainer"
import HeaderContainer from "./header/headerContainer"
import {connect} from "react-redux"
import {initializeApp} from "./state/appReducer"
import Preloader from "./helpers/preloader"
import {getCategories, getInitialize} from "./selectors/selectors"


class App extends PureComponent {
    componentDidMount() {
        this.props.initializeApp()
    }

    state = {
        isBagOpened: false
    }

    constructor() {
        super()
        this.toggleBagOpening = this.toggleBagOpening.bind(this)
    }

    toggleBagOpening = (isBagOpened) => {
        this.setState({
            isBagOpened: isBagOpened
        })
    }

    render() {
        if (!this.props.isInitialized) {
            return <Preloader/>
        }
        return <div className={s.app + ' ' + (this.state.isBagOpened ? s.overflowHidden : '')}>
            <HeaderContainer toggleBagOpening={this.toggleBagOpening} isBagOpened={this.state.isBagOpened}/>
            <Routes>
                <Route path='/' element={<Navigate to={"/categories/"+ this.props.categories[0].name}/>}/>
                <Route path='categories/:categoryId' element={<CategoriesContainer/>}/>
                <Route path='product/:productId' element={<ProductContainer/>}/>
                <Route path='/basket' element={<BagPageContainer/>}/>
                <Route path='*' element={<div className={s.error}><h1>404 Page not found</h1></div>}/>
            </Routes>
        </div>
    }
}

let mapStateToProps = (state) => ({
    isInitialized: getInitialize(state),
    categories: getCategories(state)
})
export default connect(mapStateToProps, {initializeApp})(App);
