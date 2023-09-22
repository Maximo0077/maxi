import './itemDetail.css'
import ItemCount from "../itemCount";
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const ItemDetail = ({ id, name, img, category, description, price, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const handleOnAdd = (quantity) => {
        setQuantityAdded (quantity)
    }

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
                <picture>
                    <img src={img} alt={name} className='ItemImg'/>
                </picture>
                <section>
                    <p className="Info">
                        Categoría: {category}
                    </p>
                    <p className="Info">
                        Descripción: {description}
                    </p>
                    <p className="Info">
                        Precio: ${price}
                    </p>
                </section>
                <footer className='ItemFooter'>
                    {
                        quantityAdded > 0 ? (
                            <Link to='/cart' className='Option' >Terminar Compra</Link>
                        ) : (
                            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                        )
                    }
                    
                </footer>
            </header>
        </article>
    )
}