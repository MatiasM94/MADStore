import React from "react";
import { useState } from "react";
import "./styles.css";
// codigo de la primera activad del workbook
const ItemCount = ({ inicial, stock, onAdd }) => {

    const [valorActual, setInicial] = useState(inicial);
    const [stockActual, setStock] = useState(stock);

    const restarCantidad = () => {
        valorActual > 1 ? setInicial(valorActual - 1) : console.log("error");
    }

    const sumarCantidad = () => {
        valorActual < stockActual ? setInicial(valorActual + 1) : console.log("stock maximo");
    }

    return (
        <>
            <div className="botones">
                <button className="btn btn-danger" onClick={restarCantidad}>-</button>
                <p className="valores">{valorActual}</p>
                <button className="btn btn-primary" onClick={sumarCantidad}>+</button>
            </div>
            <div className="botones">
                <button className="btn btn-primary boton" onClick={() => onAdd(valorActual, stockActual, setInicial, setStock)}>Agregar al carrito</button>
                <p className="valores">stock: {stockActual}</p>
            </div>
        </>

    );
};

export default ItemCount;