import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer =({greeting}) => {

    return(
        <div>
            <p>{greeting}</p>
        <ItemCount stock={5} initial={1} onAdd={"Compraste los siguientes productos All Black"}/>
        </div>
        
    )
}

export default ItemListContainer