import React from "react";
import { useState } from "react";
import { ToastError } from "../Toastify/toastify";
import "./styles.css";

const ItemCount = ({ inicial, stock, onAdd, buttonText = "Agregar al carrito" }) => {

    const [valorActual, setInicial] = useState(inicial);

    const restarCantidad = () => {
        valorActual > 1 ? setInicial(valorActual - 1) : ToastError("No puedes quitar más productos");
    }

    const sumarCantidad = () => {
        valorActual < stock ? setInicial(valorActual + 1) : ToastError("No puedes agregar más productos");
    }

    return (
        <>
            <div className="botones">
                <button className="btn btn-danger" onClick={restarCantidad}>-</button>
                <p className="valores">{valorActual}</p>
                <button className="btn btn-primary" onClick={sumarCantidad}>+</button>
            </div>
            <div className="botones">
                <button disabled={stock === 0 ? true : false} className="btn btn-primary boton" onClick={() => onAdd(valorActual)}>{buttonText}</button>
                <p className="stock valores">stock disponible: {stock}</p>
            </div>
        </>

    );
};

export default ItemCount;