
import { useContext } from 'react';
import './cartWidget.css'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import {BsCart4} from 'react-icons/bs'

export const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return(
        <Link to='/cart' className='CartWidget cartBtn'  >
            
            <BsCart4 className='cartImg' alt='cart-widget' />

            {totalQuantity}
        </Link>
        
    );
}