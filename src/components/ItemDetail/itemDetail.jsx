import React from "react";
import ItemCount from "../ItemCount/itemcount";
import "./styles.css"

const ItemDetail = ({productDetail}) => {

    // Este codigo es la de la primera activadad del workbook
    const onAdd = (cantidad, stock, setInicial, setStock) => {
        if (stock >= 1) {
            alert(`Agregaste ${cantidad} productos, el stock es de ${stock}`)
            setInicial(1)
            setStock(stock - cantidad)
        } else {
            console.log("No hay stock")
        }
    }

    return (
        <div className="card-producto">
            <img className="detail-imagen" src={productDetail.pictures[0].url} alt="producto" />
            <div className="text-producto">
                <h2>{productDetail.title}</h2>
                <h3>${productDetail.price}</h3>
                <ItemCount inicial = {1} stock = {10} onAdd={onAdd}/>
            </div>
        </div>
    )
};

export default ItemDetail;