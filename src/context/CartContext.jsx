import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])


    const addItem = (item, quantity) => {
        if(!isInCart(item.id)){
            setCart(prev => [...prev, {...item, quantity}])
        } else {
            console.error('El producto fue agregado')
        }
    }

    const removeItem = (itemId) =>{
        const cartUpdated = cart.filter(prod => prod.id !== itemId )
        setCart(cartUpdated) 
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some (prod => prod.id === itemId)
    }

    const getTotalPrice = () => {
        let total = 0
        for (let index = 0; index < cart.length; index++) {
            total += cart[index].price * cart[index].quantity
        }
        
        return total
    }

    return (
        <CartContext.Provider value={{cart ,addItem, removeItem, clearCart, getTotalPrice}} >
            { children }
        </CartContext.Provider>
    )

}