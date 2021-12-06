import "./Item.css"


const Item = ({product}) => {
    return(
        <div className="listProduct">
              <div className="prod" key={product.id}>
                  <h1>{product.name}</h1>
                  <h2>{product.descripcion}</h2>
                  <img src={product.img} alt="imagen" />
                  <p>{product.precio}</p>
                  <button>Ver detalle del producto</button> 
                  <p>Stock: {product.stock}</p>
              </div> 
        </div>
    )
};

export default Item