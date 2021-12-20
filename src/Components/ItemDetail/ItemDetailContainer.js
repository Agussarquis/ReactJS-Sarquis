import React, {useEffect, useState } from 'react'
import { getItem } from '../Productos';
import ItemDetail from '../Item/Item';
import { getItemById } from '../Productos';
import { useParams } from 'react-router';



const ItemDetailContainer =() => {
    const[product,setOneProduct] = useState();
    const [inputType, setInputType] = useState('input')

    const { paramId } = useParams()

    useEffect(() => {
        const listOneProduct = getItemById(paramId);

        listOneProduct
            .then((response) => {
                setOneProduct(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [paramId]);

    return(
        <div className="ListItem">
            <button onClick={() => setInputType('input')}>Input</button>
            <button onClick={() => setInputType('button')}>Button</button>
            <ItemDetail product={product} inputType={inputType}/>
        </div>
        
    )
}


export default ItemDetailContainer