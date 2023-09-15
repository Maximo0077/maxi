
import cart from './assets/cart.svg';
import './cartWidget.css'

export const CartWidget = () => {
    return(
        <button className='cartBtn'>
            <div>
                <span class="material-symbols-outlined">
                add_shopping_cart
                </span>
                <p>2</p>
            </div>
        </button>
        
    );
}