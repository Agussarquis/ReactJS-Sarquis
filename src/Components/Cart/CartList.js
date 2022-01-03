import React, {useContext} from 'react';
import ItemCart from './ItemCart';
import { CartContext } from '../../Context/CartContext';

export const CartList = ({ items, total }) => {
    
    return (
        <table className="listCartProduct">
            <thead>
                <tr>
                    <th>Productos</th>
                    <th>Nombre</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th></th>
                </tr>
            </thead>
            {items.map((product) => (
                <ItemCart key={product.product.id} product={product.product} count={product.count} />
            ))}
            <tfoot>
                <tr className="listCartTotal">
                    <td></td>
                    <td></td>
                    <td>
                        <h2>Total:</h2>
                    </td>
                    <td>
                        <h2>${total}</h2>
                    </td>
                    <td></td>
                </tr>
            </tfoot>
        </table>
    );
};

export default CartList;