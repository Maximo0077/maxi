import './cartItem.css'
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartItem = () => {
  const { cart, removeItem } = useContext(CartContext);
  

  const renderCartItem = (item) => (
    
    <article className="cartList" key={item.id}>
      <h2>{item.name}</h2>
      <aside className="cartInfo">
        <p className="info">Cantidad: {item.quantity}</p>
        <p className="info">Precio por producto: ${item.price}</p>
        <p className="info">Subtotal: ${item.price * item.quantity}</p>
      </aside>
      <button onClick={() => removeItem(item.id)} className="Button">
        X
      </button>
    </article>
  );

  return <div>{cart.map((item) => renderCartItem(item))}</div>;
};