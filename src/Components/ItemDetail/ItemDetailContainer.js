import React, {useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../Service/FireBase/fireBase';



const ItemDetailContainer =() => {
    const[product,setOneProduct] = useState();
    const [inputType, setInputType] = useState('input')
    const[loading, setLoading] = useState(true)
    const { paramId } = useParams()

    useEffect(() => {
        setLoading(true)
        getDoc(doc(db,'Products', paramId)).then((querySnapshot) => {
            const product = { id: querySnapshot.id, ...querySnapshot.data()}
            setOneProduct(product)
        }).catch((error) => {
            console.log('Error searching Products', error)
        }).finally(() =>{
            setLoading(false)
        })
    }, [paramId]);

    if(loading) {
        return <h1>Loading...</h1>
    }

    return(
        <div>
            <ItemDetail product={product} inputType={inputType}/>
        </div>
        
    )
}


export default ItemDetailContainer