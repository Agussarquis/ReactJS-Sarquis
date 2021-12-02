import React, {useEffect, useState } from 'react'
import ItemCount from '../ItemCount'
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../Productos';
import "./ItemListContainer.css"



const ItemListContainer =() => {
    const[products,setProducts] = useState([]);

    useEffect(() => {
        const list = getProducts()
        
        list.then(list => {
            setProducts(list);
        })

        return (() => {
            setProducts([])
        })
    }, [])

    return(
        <div className="ItemListContainer">
        {/*<ItemCount stock={5} initial={1} onAdd={"Compraste los siguientes productos All Black"}/>*/}
        <ItemList products={products}/>
        </div>
        
    )
}


export default ItemListContainer