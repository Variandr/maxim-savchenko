import React from "react"
import s from './bag.module.css'
import BagItem from "./bagItem";

const Bag = (props) => {
    // let totalPrice = 0;
    let bagItems = props.selectedProducts.map(p => {
        // totalPrice += p.price * p.count
        return <BagItem key={p.id} name={p.name} photo={p.photo} count={p.count}/>
    })
    return <div className={s.bag}>
        <div className={s.bagHeader}><b>My
            bag,</b> {props.selectedProducts.length} {props.selectedProducts === 1 ? "item" : "items"}</div>
        <div>{bagItems}</div>
        {/*<div><span>Total</span><span>{props.value}{totalPrice}</span></div>*/}
        <div>
            <div className={s.viewBagBtn}>View bag</div>
            <div className={s.checkOutBtn}>Check out</div>
        </div>
    </div>
}
export default Bag