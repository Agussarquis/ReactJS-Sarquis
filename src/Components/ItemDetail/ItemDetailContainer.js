import React, {useEffect, useState } from 'react'
import { getItem } from '../Productos';
import ItemDetail from './ItemDetail';



const ItemDetailContainer =() => {
    const[products,setProducts] = useState([]);

    useEffect(() => {
        const detail = getItem()
        
        detail.then(itemDetail => {
            setProducts(itemDetail);
        })
    })

    return(
        <div className="ListItem">
        <ItemDetail product={products}/>
        </div>
        
    )
}


export default ItemDetailContainer