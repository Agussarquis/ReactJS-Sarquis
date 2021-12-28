import React, {useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList';
import "./ItemListContainer.css"
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../Service/FireBase/fireBase';

const ItemListContainer =() => {
    const[product,setProducts] = useState([]);
    const[loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        if(!categoryId) {
            setLoading(true)
            getDocs(collection(db,'Products')).then((querySnapshot) => {
                console.log(querySnapshot)
                const products =querySnapshot.docs.map(doc => {
                    console.log(doc)
                    return {id: doc.id, ...doc.data()}
                })
                setProducts(products)
            }).catch((error) => {
                console.log('Error searching Products', error)
            }).finally(() => {
                setLoading(false)
            })       
        } else {
            setLoading(true)
            getDocs(query(collection(db,'Products'),where('category', '==', categoryId))).then((querySnapshot) => {
                console.log(querySnapshot)
                const products =querySnapshot.docs.map(doc => {
                    console.log(doc)
                    return {id: doc.id, ...doc.data()}
                })
                setProducts(products)
            }).catch((error) => {
                console.log('Error searching Products', error)
            }).finally(() => {
                setLoading(false)
            })  

        }
        return (() => {
            setProducts([])
        })
    }, [categoryId])

    if(loading) {
        return <h1>Loading...</h1>
    }

    return(
        <div className="ItemListContainer">
        <ItemList products={product}/>
        </div>
        
    )
}


export default ItemListContainer