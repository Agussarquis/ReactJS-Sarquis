import "./ItemList.css"
import Item from "../Item/Item";

const ItemList = ({products}) => {
    return (
        <ul className="ListGroup">
            {products.map(products =><Item key={products.id} product={products}/>)}
        </ul>
    )
}

export default ItemList