import React, {PureComponent} from "react"
import './App.css'
import {Route, Routes, Navigate} from "react-router-dom"
import CategoriesContainer from "./content/categories/categoriesContainer"
import ProductContainer from "./content/PDP/productContainer"
import BagPageContainer from "./content/bagPage/bagPageContainer"
import HeaderContainer from "./header/headerContainer"
import {connect} from "react-redux"
import {initializeApp} from "./state/appReducer"


class App extends PureComponent {
    componentDidMount() {
        this.props.initializeApp()
    }

    state = {
        isBagOpened: false
    }

    constructor() {
        super()
        this.toggleBagOpen = this.toggleBagOpen.bind(this)
    }

    toggleBagOpen = () => {
        this.setState({
            ...this.state,
            isBagOpened: !this.state.isBagOpened
        })
    }

    render() {
        if (!this.props.isInitialized) {
            return <></>
        }
        return <div className={`app ${this.state.isBagOpened ? 'overflow-hidden' : ''}`}>
            <HeaderContainer toggleBagOpen={this.toggleBagOpen} isBagOpened={this.state.isBagOpened}/>
            <Routes>
                <Route path='/' element={<Navigate to="/categories/all"/>}/>
                <Route path='categories/:categoryId' element={<CategoriesContainer/>}/>
                <Route path='product/:productId' element={<ProductContainer/>}/>
                <Route path='/basket' element={<BagPageContainer/>}/>
                <Route path='*' element={<div className='error'><h1>404 Page not found</h1></div>}/>
            </Routes>
        </div>
    }
}

let mapStateToProps = (state) => ({
    isInitialized: state.app.isInitialized
})
export default connect(mapStateToProps, {initializeApp})(App);
