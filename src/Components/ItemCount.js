import react, {useState} from "react";

const ItemCount = (props) => {
    
    const [mensaje] = useState(props.onAdd)
    const [count, setcount] = useState(props.initial);

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

    const onAdd = () => {
        if (props.stock >= count) {
            alert(mensaje);    
        }else{
            alert('No hay stock');
        }
    }

    return (
        <div>
            <div className="my-4">
                <button onClick={handleClickRemove} type="button" className="btn btn-secondary"> - </button>
                <span> {count} </span>
                <button onClick={handleClickAdd} type="button" className="btn btn-secondary"> + </button>
            </div>

            <button onClick={onAdd} type="button" className="btn btn-secondary btn-lg"> Agregar al carrito </button>
        </div>
    )
}

export default ItemCount;