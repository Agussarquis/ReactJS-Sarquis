import ItemCount from '../ItemCount'
import React, { useState, useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
import { NotificationContext } from '../../Context/NotificationContext'
import './Detail.css'


const ItemDetail = ({ product }) => {
    const { addItemCart } = useContext(CartContext);
    const { setNotification } = useContext(NotificationContext);

    const [purchase, setPurchase] = useState(false);

    const onAdd = (count) => {
        let itemCart = addItemCart({ product, count });

        if (itemCart) {
            setNotification('succes', `¡Agregaste ${count} ${product.name} a tu carrito!`);
            setPurchase(true);
        } else {
            setNotification('error', `¡Ingresaste más productos del stock permitido!`);
            setPurchase(false);
        }
    };

    return(
        <div className='container deta'>
            <div key={product?.id}>
                <h1>{product?.name}</h1>
                <h2>{product?.descripcion}</h2>
                <img src={product?.img} alt="imagen" />
                <p>{product?.precio}</p>
                <p>{product?.category}</p>
                <p>Stock: {product?.stock}</p>
                <p>{product?.texto}</p>
                {!purchase ? (
                <ItemCount stock={product?.stock} initial={10} onAdd={onAdd}/>
                 ) : (
                    <div>
                        <div>
                            <Link  to={'/'}>
                                <button className='btn btn-dark'>Seleccionar otro Artículo</button>
                            </Link>
                        </div>
                        <div>
                            <Link to={'/cart'}>
                                <button className='btn btn-dark'>Ir al Carrito</button>
                            </Link>
                        </div>
                    </div>
                )}
            </div> 
        </div>
    )
}

export default ItemDetail