import React, {PureComponent} from "react"
import './App.css'
import {Route, Routes, Navigate} from "react-router-dom"
import CategoriesContainer from "./content/categories/categoriesContainer"
import ProductContainer from "./content/PDP/productContainer"
import BagPageContainer from "./content/bagPage/bagPageContainer"
import HeaderContainer from "./header/headerContainer"


class App extends PureComponent {
    render() {
        return <div className="app">
            <HeaderContainer/>
            <Routes>
                <Route path='/' element={<Navigate to="/categories/all"/>}/>
                <Route path='categories/:categoryId' element={<CategoriesContainer/>}/>
                <Route path='product/:productId' element={<ProductContainer/>}/>
                <Route path='/basket' element={<BagPageContainer/>} />
                <Route path='*' element={<div className='error'><h1>404 Page not found</h1></div>}/>
            </Routes>
        </div>
    }
}

export default App;
