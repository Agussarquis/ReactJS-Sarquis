import ItemCount from '../ItemCount'
import { useState } from 'react'

const InputCount = ({onConfirm, maxQuantity}) => {
    const [count, setCount] = useState(0)

    const handleChange = ({target}) => {
        if(target.value <= maxQuantity && target.value >= 0) {
            setCount(target.value)
        }
    }

    return (
        <div>
            <input type='number' onChange={handleChange} value={count}/>
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}

const ButtonCount = ({ onConfirm, maxQuantity}) => {
    const [count, setCount] = useState(0)

    const increment = () => {
        if(count < maxQuantity) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}

const ItemDetail = ({product, inputType = 'input' }) => {

    const Count = inputType === 'input' ? InputCount : ButtonCount

    const addToCart = (count) => {
        console.log(`Agregado al carrito ${count}`)
    }

    return(
        <div className="listProduct">
            {product?.length !==0?(
                <div key={product?.id}>
                    <h1>{product?.name}</h1>
                    <h2>{product?.descripcion}</h2>
                    <img src={product?.img} alt="imagen" />
                    <p>{product?.precio}</p>
                    <p>{product?.category}</p>
                    <p>Stock: {product?.stock}</p>
                    <p>{product?.texto}</p>
                    <Count onConfirm={addToCart} maxQuantity={product?.stock}/>
                </div> 
            ):(<div>Cargando...</div>)}
        </div>
    )
};

export default ItemDetail