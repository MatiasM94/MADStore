import React from "react";
import "./styles.css";

const ItemListContainer = ({greeting}) => {
    return (
        <h2 className="item_list">{greeting}</h2>
    );
}

export default ItemListContainer;