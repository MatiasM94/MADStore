import React from "react";
import Item from "../Item/item";
import "./styles.css"

const ItemList = ({ products }) => {

    return (
        <div className="card-container">
            {products.map(producto => {
                return <Item key={producto.id} producto={producto} />
            })
            }
        </div>
    )
}

export default ItemList