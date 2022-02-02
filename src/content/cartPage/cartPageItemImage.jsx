import s from "./cartPage.module.css"
import leftArrow from "../../assets/leftArrow.svg"
import rightArrow from "../../assets/rightArrow.svg"
import React from "react"

const CartPageItemImage = ({gallery, swapImageToLeft, swapImageToRight, imgId}) => {
    return <div>
        {gallery.length > 1 &&
            <div>
                {imgId > 0 &&
                    <div className={s.leftArrowBtn} onClick={swapImageToLeft}>
                        <img src={leftArrow} alt='arrowBtn'/>
                    </div>
                }
                {imgId < gallery.length - 1 &&
                    <div className={s.rightArrowBtn} onClick={swapImageToRight}>
                        <img src={rightArrow} alt='arrowBtn'/>
                    </div>
                }
            </div>
        }
        <div className={s.cartImgContainer}>
            <img className={s.cartImg} src={gallery[imgId]} alt='bagItemPhoto'/>
        </div>
    </div>
}
export default CartPageItemImage