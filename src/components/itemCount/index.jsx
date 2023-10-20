import { useState } from "react";
import './contStyle.css'

const ItemCount = ({stock, initial, onAdd}) =>{
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity (quantity + 1)
        }
    }
    const decrement = () => {
        if(quantity > 1) {
            setQuantity (quantity - 1)
        }
    }
    return(
        <div className="Counter">
            <div className="Controls">
                <button className="Button incDec" onClick={decrement}>
                <span className="material-symbols-outlined">remove
                </span>
                </button>
                <h4 className="Number">{quantity}</h4>
                <button className="Button incDec" onClick={increment}>
                    <span className="material-symbols-outlined">add
                    </span>
                </button>
            </div>
            <div>
                <button className="Button"onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount;