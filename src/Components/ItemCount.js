import React, {useState} from 'react';

const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(0)
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
        <div>
        <div className = "my-4">

            <button onClick = {handleSub} type="button" className="btn btn-secondary" >-</button>
            <span>{count}</span>
            <button onClick = {handleAdd} type="button" className="btn btn-secondary" >+</button>
        </div>
        <div className='my-4'>    
            {out && <span>No hay stock disponible</span>}
        </div>    
            
            <button onClick={() => onAdd(count)} type="button" className="btn btn-secondary btn-lg" > Agregar al carrito </button>
        

        </div>
    )
}

export default ItemCount