import React from "react"
import './App.css'
import {Route, Routes} from "react-router-dom"
import Header from "./header/header"
import TechContainer from "./content/categories/techContainer"
import ClothesContainer from "./content/categories/clothesContainer"
import AllCategoriesContainer from "./content/categories/allCategoriesContainer";

const Categories = () => {
    return <div>
        <Routes>
            <Route path='/' element={<AllCategoriesContainer/>}/>
            <Route path='clothes' element={<ClothesContainer/>}/>
            <Route path='tech' element={<TechContainer/>}/>
        </Routes>
    </div>
}

class App extends React.Component {
    render() {
        return <div className="app">
            <Header/>
            <Routes>
                <Route path='categories/*' element={<Categories/>}/>
            </Routes>
        </div>
    }
}

export default App;
