import React, {PureComponent} from "react"
import './App.css'
import {Route, Routes} from "react-router-dom"
import Header from "./header/header"
import TechContainer from "./content/categories/techContainer"
import ClothesContainer from "./content/categories/clothesContainer"
import AllCategoriesContainer from "./content/categories/allCategoriesContainer"
import ProductContainer from "./content/PDP/productContainer"

const Categories = () => {
    return <div>
        <Routes>
            <Route path='all' element={<AllCategoriesContainer/>}/>
            <Route path='clothes' element={<ClothesContainer/>}/>
            <Route path='tech' element={<TechContainer/>}/>
        </Routes>
    </div>
}

class App extends PureComponent {
    componentDidMount() {
    }
    render() {
        return <div className="app">
            <Header/>
            <Routes>
                <Route path='categories/*' element={<Categories/>}/>
                <Route path='product/:productId' element={<ProductContainer/>}/>
                <Route path='*' element={<div className='error'><h1>404 Page not found</h1></div>}/>
            </Routes>
        </div>
    }
}

export default App;
