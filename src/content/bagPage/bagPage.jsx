import BagItem from "./bagItem"
import s from './bagPage.module.css'

const BagPage = ({products}) => {
    let bagItems = products.map(p => {
        return <BagItem key={p.id} name={p.name} brand={p.brand} photo={p.photo}
                        attributes={p.attributes}/>
    })
    return <div>
        <div className={s.cart}>CART</div>
        <div>
            {bagItems}
        </div>
    </div>
}
export default BagPage