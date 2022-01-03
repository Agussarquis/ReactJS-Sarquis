import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import './Cart.css'

const ItemCart = ({ product, count }) => {
    const { removeItemCart } = useContext(CartContext);

    const removeItem = () => {
        removeItemCart(product.id);
    };

    return (
        <tbody className="cartList">
            <tr>
                <td>
                    <img src={product.img} alt="Imagen" />
                </td>
                <td>
                    <h1> {product.name} </h1>
                </td>
                <td>
                    <h2 className="Count">{count}</h2>
                </td>
                <td>
                    <h2 className="Price">{product.precio}</h2>
                </td>
                <td>
                    <i onClick={removeItem} className="far fa-times-circle"></i>
                </td>
            </tr>
        </tbody>
    );
};

export default ItemCart;