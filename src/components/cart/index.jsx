import './cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { CartItem } from '../CartItem'


export const Cart = () => {
    const { clearCart, totalQuantity, getTotalPrice} = useContext (CartContext)

    if(totalQuantity === 0){
        return(
            <div>
                <h1>No hay mas items en este carrito</h1>
                <Link to='/' className='Option' >Productos</Link>
            </div>
        )
    }

    


    return(
        <div>
            <CartItem/>
            <div className='CartCart' >
                <h3>Total: ${getTotalPrice()}</h3>
                <button onClick={() => clearCart() } className='Button' >Limpiar Carrito</button>
                <Link to='/checkout' className='Option' >Checkout</Link>
            </div>
            
        </div>
    )
}