import react from "react";

const ItemList = ({items}) => {
    return(
        <div className="listProduct">
            {items.map((item) => (
              <div key={item.id}>
                  <h1>{item.name}</h1>
                  <img src="./img/buzo-canguro.jpg" alt="imagen" />
                  <p>{item.precio}</p>
                  <button>Ver detalle del producto</button> 
                  <p>{item.stock}</p>
              </div>)  
            )}
        </div>
    );
}

export default ItemList