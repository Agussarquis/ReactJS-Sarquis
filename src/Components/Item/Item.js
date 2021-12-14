import "./Item.css"
import { Link } from "react-router-dom";


const Item = ({product}) => {

    const handleClick = (evt) => {
        evt.stopPropagation()
        console.log(`hice click en Item ${product.id}`)
    }

    return(
        <div className="listProduct" onClick={handleClick}>
              <div className="prod" key={product.id}>
                  <h1>{product.name}</h1>
                  <h2>{product.descripcion}</h2>
                  <img src={product.img} alt="imagen" />
                  <p>{product.precio}</p>
                  <Link className='ButtonDetail' to={`/detail/${product.id}`}>Ver detalle</Link> 
                  <p>Stock: {product.stock}</p>
              </div> 
        </div>
    )
};

export default Item