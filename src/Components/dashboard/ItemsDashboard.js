import React from 'react'
import ItemDash from './ItemDash'

const ItemsDashboard = ({products}) => {
    return (
        <div>
            {products.map(product => {
                return <ItemDash key={product.id} product={product}></ItemDash>
            })}
        </div>
    )
}

export default ItemsDashboard