import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../services/firebase';
import { CartContext } from '../context/CartContext';

const CheckoutForm = () => {
  const [orderId, setOrderId] = useState('');
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const { register, handleSubmit } = useForm(); 

  const handleCheckout = async (data) => {
    try {
      if (cart && cart.length > 0) {
        const total = getTotalPrice();

        const order = {
          client: data,
          products: cart,
          total: total,
        };

        const ordersRef = collection(db, 'orders');
        const docRef = await addDoc(ordersRef, order);

        const orderId = docRef.id;
        setOrderId(orderId);
        clearCart();
      } else {
        console.error('Error: Cart is undefined or empty.');
      }
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  if (orderId) {
    return (
      <div className="container">
        <h1 className="main-title">¡Gracias por tu compra!</h1>
        <p>Tu número de orden es: {orderId}</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="main-title">Finalizar compra</h1>
      <form className="formulario" onSubmit={handleSubmit(handleCheckout)}>
        <input type="text" placeholder="Ingresa tu nombre" {...register('name')} />
        <input type="email" placeholder="Ingresa tu correo electrónico" {...register('email')} />
        <input type="tel" placeholder="Ingresa tu número de teléfono" {...register('phone')} />
        <button className="enviar" type="submit">
          Comprar
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
