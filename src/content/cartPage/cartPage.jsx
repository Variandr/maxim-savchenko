import CartPageItem from "./cartPageItem"
import s from './cartPage.module.css'

const CartPage = ({products, activeCurrency, deleteProduct, setCount}) => {
    let bagItems = products.map(p => {
        return <CartPageItem key={p.id} {...p}
                             chosenAttributes={p.chosenAttributes}
                             activeCurrency={activeCurrency}
                             deleteProduct={deleteProduct}
                             setCount={setCount}/>
    })
    return <div>
        <div className={s.cart}>CART</div>
        <div>
            {bagItems}
        </div>
    </div>
}
export default CartPage