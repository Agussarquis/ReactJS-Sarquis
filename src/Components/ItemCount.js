import react, {useState,useContext} from "react";
import { Link } from 'react-router-dom'
import { CartContext } from "../Context/CartContext"; 


const ItemCount = (props,product) => {
    
    const [mensaje] = useState(props.onAdd)
    const [count, setcount] = useState(props.initial);
    const {addItem} = useContext(CartContext)

    const [buy, setBuy] = useState(false);
    const [qty, setQty] = useState(0);

    const handleClickAdd = () => {
        if(count < props.stock)
        {
          setcount(count + 1);
        }
    }

    const handleClickRemove = () => {
        if(count > 1)
        {
            setcount(count - 1);
        }
    }

    const handlePurchase = () => {
        addItem(product, qty);
    }

    return (
        <div>
            <div className="my-4">
                <button onClick={handleClickRemove} type="button" className="btn btn-secondary"> - </button>
                <span> {count} </span>
                <button onClick={handleClickAdd} type="button" className="btn btn-secondary"> + </button>
            </div>

            <button onClick = {handlePurchase} type="button" className="btn btn-secondary btn-lg"><Link to= "/cart"> Agregar al carrito </Link></button>
        </div>
    )
}

export default ItemCount;