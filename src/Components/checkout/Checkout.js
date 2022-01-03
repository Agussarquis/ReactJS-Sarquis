import React, { useContext, useState } from 'react';

import { getProductStock, outOfStockProduct } from '../Productos';
import { CartContext } from '../../Context/CartContext';
import { useNavigate } from 'react-router-dom';
import { NotificationContext } from '../../Context/NotificationContext';
import { UserContext } from '../../Context/UserContext';
import { Link } from 'react-router-dom';

const CheckoutContainer = () => {
    const { clearItems, getTotal, values } = useContext(CartContext);
    const { updateEmail } = useContext(UserContext);
    const { setNotification } = useContext(NotificationContext);

    const [valores, setValores] = useState({ nombre: '', apellido: '', telefono: '', email: '' });

    const [errorNombre, setErrorNombre] = useState(false);
    const [errorApellido, setErrorApellido] = useState(false);
    const [errorTelefono, setErrorTelefono] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);

    const [ProccessingOrder, setProccessingOrder] = useState(false);
    const navigate = useNavigate();

    const llenarFormulario = (e) => {
        const { name, value } = e.target;
        setValores({
            ...valores,
            [name]: value,
        });
    };

    const handleOnKeyDownTelefono = (e) => {
        if (e.keyCode === 8 || e.keyCode === 9 || e.keyCode === 13 || (e.keyCode >= 48 && e.keyCode <= 57)) {
        } else {
            e.preventDefault();
        }
    };

    const validateForm = (e) => {
        e.preventDefault();

        if (!valores.nombre) {
            setErrorNombre(true);
        } else {
            setErrorNombre(false);
        }
        if (!valores.apellido) {
            setErrorApellido(true);
        } else {
            setErrorApellido(false);
        }
        if (!valores.email) {
            setErrorEmail(true);
        } else {
            setErrorEmail(false);
        }
        if (!valores.telefono) {
            setErrorTelefono(true);
        } else {
            setErrorTelefono(false);
        }

        if (valores.nombre && valores.apellido && valores.email && valores.telefono) {
            checkout();
        }
    };

    const checkout = () => {
        const compra = {
            buyer: { nombre: valores.nombre, apellido: valores.apellido, phone: valores.telefono, email: valores.email },
            items: values.itemCart,
            total: getTotal(),
        };

        let productSotck = getProductStock(compra);

        outOfStockProduct(compra, productSotck.batch, productSotck.outOfStock)
            .then((res) => {
                setNotification('succes', 'Su orden es: ' + res);
            })
            .catch((err) => {
                setNotification('error', 'Error ejecutando la orden' + err);
            })
            .finally(() => {
                updateEmail(compra.buyer.email);
                setTimeout(() => {
                    navigate('/dashboard');
                    clearItems();
                }, 4000);
                setProccessingOrder(true);
            });
    };

    return (
        <div className="checkoutContainer">
            {values.itemCart.length > 0 ? (
                <div>
                    {!ProccessingOrder ? (
                        <form method="post" onSubmit={validateForm}>
                            <h1>Ingresar Datos</h1>
                            <div className="containerText">
                                <input type="text" placeholder="Nombre" name="nombre" id="nombre" onChange={llenarFormulario} />
                                {errorNombre && <p className="error">El nombre es requerido</p>}
                            </div>
                            <div className="containerText">
                                <input type="text" placeholder="Apellido" name="apellido" id="apellido" onChange={llenarFormulario} />
                                {errorApellido && <p className="error">El apellido es requerido</p>}
                            </div>
                            <div className="containerText">
                                <input type="email" placeholder="Email" name="email" id="email" onChange={llenarFormulario} />
                                {errorEmail && <p className="error">El email es requerido</p>}
                            </div>
                            <div className="containerText">
                                <input
                                    type="tel"
                                    placeholder="Teléfono"
                                    name="telefono"
                                    id="telefono"
                                    onKeyDown={handleOnKeyDownTelefono}
                                    onChange={llenarFormulario}
                                />
                                {errorTelefono && <p className="error">El teléfono es requerido</p>}
                            </div>
                            <p>Total: ${getTotal()}</p>
                            <div>
                                <button type="submit">Enviar</button>
                            </div>
                        </form>
                    ) : (
                        <h1>Será redirigido al Dashboard</h1>
                    )}
                </div>
            ) : (
                <div>
                    <h1>No hay productos en el carrito</h1>
                    <Link to="/">
                        <button className="buttonCart">Volver a la tienda</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default CheckoutContainer;