import React, {useEffect, useState } from 'react'
import { getProductById } from '../Productos';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router';



const ItemDetailContainer =() => {
    const[products,setProducts] = useState([]);
    const[inputType, setInputType] = useState("input")

    const { paramId } = useParams()

    useEffect(() => {
        getProductById(paramId).then(item => {
            setProducts(item)
        }).catch(err => {
            console.log(err)
        })
        
        return(() => {
            setProducts();
        })
    },[paramId])

    return(
        <div className="ListItem">
            <button onClick={() => setInputType('input')}>Input</button>
            <button onClick={() => setInputType('button')}>Button</button>
            <ItemDetail product={products} inputType={inputType}/>
        </div>
        
    )
}


export default ItemDetailContainer