import React, {useEffect, useState } from 'react'
import { getItem } from '../Productos';
import ItemDetail from '../Item/Item';
import { getProductById } from '../Productos';
import { useParams } from 'react-router';



const ItemDetailContainer =() => {
    const[products,setProducts] = useState();
    const [inputType, setInputType] = useState('input')

    const { paramId } = useParams()

    useEffect(() => {
        getProductById(paramId).then(item => {
            setProducts(item)
        }).catch(err  => {
            console.log(err)
        })

        return (() => {
            setProducts()
        })

    }, [paramId])

    return(
        <div className="ListItem">
            <button onClick={() => setInputType('input')}>Input</button>
            <button onClick={() => setInputType('button')}>Button</button>
            <ItemDetail item={products} inputType={inputType}/>
        </div>
        
    )
}


export default ItemDetailContainer