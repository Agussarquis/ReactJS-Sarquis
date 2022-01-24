import React from 'react';

const ItemDash = ({ product }) => {
    return (
        <div>
            <h1>ID de Compra: {product.id}</h1>
            <h2>{product.buyer.email}</h2>
            <p>Productos:</p>
            {product.items.length > 0 &&
                product.items.map((product) => {
                    console.log(product.product.name);
                    return (
                        <ul  key={product.product.id}>
                            <li>{product.product.name}</li>
                            <li>{product.product.precio}</li>
                            <li>x{product.count}</li>
                        </ul>
                    );
                })}
            <h3>Total: ${product.total}</h3>
        </div>
    );
};

export default ItemDash;