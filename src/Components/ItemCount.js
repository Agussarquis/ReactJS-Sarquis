import React, {useState} from 'react';

const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(1)
    const [out, setOut] = useState(false)

    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1);
        }
        else {
            setOut (true);
        }
    }

    const handleSub = () => {
        if (count === 1) {
            return
        } else {
            setCount(count - 1)
            setOut(false);
        }
    }

    return (
        <div className = "itemCountContainer">

            <button onClick = {handleSub} className="btn btn-secondary" >-</button>
            <span>{count}</span>
            <button onClick = {handleAdd} className="btn btn-secondary" >+</button>
            {out && <span>Out of stock</span>}
            <button onClick={() => onAdd(count)} className="btn btn-secondary btn-lg" > Agregar al carrito </button>

        </div>
    )
}

export default ItemCount