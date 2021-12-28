import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const getCantidad = () => {
        let subTotal = 0;
        cart.forEach(elemento=> {
            console.log(elemento);
            subTotal += elemento.cantidad
        })
        return subTotal;
    }

    const addItem = (product, quantity) => {

        const flag = isInCart(product);
        console.log(flag);
        if (flag) {
            let productoRepetido = cart.find (elemento => elemento.item === product);
            productoRepetido.cantidad += quantity;
            let cartSinRepetido = cart.filter (elemento => elemento.item !== product);
            setCart([...cartSinRepetido, productoRepetido]);
        } else {
            setCart([...cart, {item: product, cantidad: quantity}]);
        }
    }

    const isInCart = (item) => {
        console.log(item);
        return cart.some(product => product.item === item );
    }

    const removeItem = (item) => {

    }

    const cleanCart = () => {

    }


    return(
        <CartContext.Provider value = {{
            cart,
            addItem, removeItem, cleanCart, getCantidad
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;