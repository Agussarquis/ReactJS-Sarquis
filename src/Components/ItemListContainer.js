import React, {useEffect, useState } from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList';
import Item from './Item';


const ItemListContainer =({greeting, classItemListContainer}) => {
    const[listProduct,setListProduct] = useState([]);

    useEffect(() => {
        const list = Item();
        
        list.then((response) => {
            setListProduct(response);
        })
    }, [])

    return(
        <div className={classItemListContainer}>
            <p>{greeting}</p>
        <ItemCount stock={5} initial={1} onAdd={"Compraste los siguientes productos All Black"}/>
        <ItemList items={listProduct}/>
        </div>
        
    )
}


export default ItemListContainer