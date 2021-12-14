import ItemCount from '../ItemCount'

const ItemDetail = ({product}) => {
    return(
        <div className="listProduct">
            {product.length !==0?(
                <div key={product.id}>
                    <h1>{product.name}</h1>
                    <h2>{product.descripcion}</h2>
                    <img src={product.img} alt="imagen" />
                    <p>{product.precio}</p>
                    <button>Ver detalle del producto</button> 
                    <p>Stock: {product.stock}</p>
                    <p>{product.texto}</p>
                    <ItemCount stock={product.stock} initial={1} onAdd={"Compraste los siguientes productos All Black"}/>
                </div> 
            ):(<div>Cargando...</div>)}
        </div>
    )
};

export default ItemDetail