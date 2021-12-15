import React, {useEffect, useState } from 'react'
import { getItem } from '../Productos';
import ItemDetail from '../Item/Item';



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
        <ItemDetail item={products}/>
        </div>
        
    )
}


export default ItemDetailContainer