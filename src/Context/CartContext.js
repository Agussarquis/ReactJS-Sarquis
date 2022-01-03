import React, { createContext ,useState } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [itemCart, setItemCart] = useState([]);

    const addItemCart = (product) => {
        const flag = isInCart(product);

        if (!flag) {
            setItemCart([...itemCart, product]);
            return true;
        } else {
            let productoRepetido = itemCart.find((producto) => producto.product.id === product.product.id);

            if (productoRepetido.count + product.count <= productoRepetido.product.stock) {
                productoRepetido.count += product.count;
                let productoSinElRepetido = itemCart.filter((producto) => producto.product.id !== product.product.id);
                setItemCart([...productoSinElRepetido, productoRepetido]);
                return true;
            } else {
                return false;
            }
        }
    }

    const getCount = () => {
        let subTotal = 0;
        itemCart.forEach((product) => {
            subTotal += product.count;
        });
        return subTotal;
    }

    const getTotal = () => {
        let subTotal = 0;

        itemCart.forEach((product) => {
            subTotal += product.count * product.product.precio;
        });
        return subTotal;
    }

    const clearItems = () => {
        setItemCart([]);
    }

    const isInCart = (product) => {
        return itemCart.some((itemCart) => itemCart.product.id === product.product.id);
    }

    const removeItemCart = (productId) => {
        setItemCart(itemCart.filter((product) => product.product.id !== productId));
    }

    return (
        <CartContext.Provider
            value={{
                values: {
                    itemCart,
                },
                addItemCart,
                getCount,
                getTotal,
                clearItems,
                removeItemCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;