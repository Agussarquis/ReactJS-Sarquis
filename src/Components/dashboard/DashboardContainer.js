import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './dash.css'

import { UserContext } from '../../Context/UserContext';
import { getOrders } from '../Productos'; 
import ItemsDashboard from './ItemsDashboard';


const DashBoardContainer = () => {
    const { values } = useContext(UserContext);
    const [listProduct, setListProduct] = useState([]);
    const [list, setList] = useState(false);

    useEffect(() => {
        getOrders('orders')
            .then((res) => {
                setListProduct(res.filter((product) => product.buyer.email === values.email));
                if (res.length === 0) {
                    setList(false);
                } else {
                    setList(true);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [values.email]);

    return (
        <div>
            {values.email !== '' ? (
                <div>
                    {list ? (
                        <div className='dash'>
                            <h1 className="title">Tu Lista de Compras</h1>
                            <ItemsDashboard products={listProduct} />
                        </div>
                    ) : (
                        <h1>Loading...</h1>
                    )}
                    <Link to="/">
                        <button className="buttonCart btn btn-dark">Volver a la tienda</button>
                    </Link>
                </div>
            ) : (
                <div>
                    <h1 className="title">No compraste nada aún</h1>
                    <Link to="/">
                        <button className="buttonCart btn btn-dark">Volver a la tienda</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default DashBoardContainer;