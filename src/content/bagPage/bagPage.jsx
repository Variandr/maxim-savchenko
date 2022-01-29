import BagItem from "./bagItem"
import s from './bagPage.module.css'

const BagPage = ({products, activeCurrency, deleteProduct, setCount}) => {
    let bagItems = products.map(p => {
        return <BagItem key={p.id} uniqueItemId={p.uniqueItemId} name={p.productData.name} brand={p.productData.brand}
                        gallery={p.productData.gallery} attributes={p.productData.attributes} prices={p.productData.prices}
                        chosenAttributes={p.chosenAttributes} activeCurrency={activeCurrency} deleteProduct={deleteProduct}
                        setCount={setCount} count={p.count}/>
    })
    return <div>
        <div className={s.cart}>CART</div>
        <div>
            {bagItems}
        </div>
    </div>
}
export default BagPage