import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import CartList from './CartList'
import { Link } from 'react-router-dom';
import { NotificationContext } from '../../Context/NotificationContext';


const CartViewContainer = () => {
    const { clearItems, values, getCount, getTotal } = useContext(CartContext);
    const { setNotification } = useContext(NotificationContext);

    const checkout = () => {
        setNotification('succes', `¡Finalizaste tu compra! ¡compraste ${getCount()} productos a $${getTotal()}!`);
    };

    return (
        <div className="containerCart">
            {values.itemCart.length !== 0 ? (
                <div>
                    <button className="buttonCart" onClick={clearItems}>
                        Borrar todos los items
                    </button>
                    <CartList items={values.itemCart} total={getTotal()} />
                    <Link to="/checkout" onClick={checkout}>
                        <button className="buttonCartEnd">Terminar Compra</button>
                    </Link>
                </div>
            ) : (
                <div className="listNotCart">
                    <Link to="/">
                        <button className="buttonCart">Volver a la tienda</button>
                    </Link>
                    <h2>Tu carrito está vacío</h2>
                    <h3>¿Aun no seleccionaste tu producto All Black? ¡Nuestros productos te esperan!</h3>
                </div>
            )}
        </div>
    );
};

export default CartViewContainer;