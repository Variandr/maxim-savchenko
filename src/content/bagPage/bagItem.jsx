import s from './bagPage.module.css'
import React, {Component} from "react";

class BagItem extends Component {
    state = {
        count: 1
    }

    render() {
        let {name, brand, photo, attributes} = this.props;
        return <div className={s.bagContainer}>
            <div>
                <div className={s.cartName}>{name}</div>
                <div className={s.cartBrand}>{brand}</div>
            </div>
            <div>
                <div className={s.counter + " " + s.counterPlus} onClick={() => {
                    this.setState({count: this.state.count += 1})
                }}>+
                </div>
                <div className={s.countNum}>{this.state.count}</div>
                <div className={s.counter + " " + s.counterMinus}
                     onClick={() => this.state.count > 1 && this.setState({count: this.state.count -= 1})
                     }>-
                </div>
                <div><img className={s.cartImg} src={photo} alt='bagItemPhoto'/></div>
            </div>
        </div>
    }
}

export default BagItem