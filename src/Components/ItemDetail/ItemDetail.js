import ItemCount from '../ItemCount'
import { useState, useContext } from 'react'
import { CartContext } from '../../Context/CartContext'


const ItemDetail = ({product}) => {

    const {addItem} = useContext(CartContext)

    const [buy, setBuy] = useState(false);
    const [qty, setQty] = useState(0);
    

    const handleBuy = (qty) => {
        setBuy(true);
        setQty(qty);
    }

    const handlePurchase = () => {
        addItem(product, qty);
    }

    return(
        <div className="listProduct">
            <div key={product?.id}>
                <h1>{product?.name}</h1>
                <h2>{product?.descripcion}</h2>
                <img src={product?.img} alt="imagen" />
                <p>{product?.precio}</p>
                <p>{product?.category}</p>
                <p>Stock: {product?.stock}</p>
                <p>{product?.texto}</p>
                <ItemCount stock={product?.stock} initial={1} onAdd={(qty) => handleBuy (qty)}/>
            </div> 
        </div>
    )
}

export default ItemDetail