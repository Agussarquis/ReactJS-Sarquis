import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const Cart = () => {

    const {cart} = useContext (CartContext);

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">Foto</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Cantidad</th>
                </tr>
            </thead>
            <tbody>
            {cart.map(product => {
                        return <tr key={product.id}>
                            <td> {product.img}</td>
                            <td> {product.descripcion} </td>
                            <td> {product.cantidad} </td>
                        </tr>
            })}
            </tbody>
        </table>
    )
}

export default Cart;