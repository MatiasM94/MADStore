import React from "react";
import { useContext } from "react";
import { Shop } from "../../contexts/Shop";
import "./styles.css";

const Cart = ({producto}) => {

    const {removeProduct} = useContext(Shop);

    const eliminarDelCart = () => {
        removeProduct(producto)
    }

    return (
        <div className="cart-detail">
            <div className="contenedor-img">
                <img className="cart-imagen" src={producto.thumbnail} alt={producto.title} />
            </div>
            <div className="cart-text">
                <h3>{producto.title}</h3>
                <h4>Por unidad: ${producto.price}</h4>
                <h4>Cantidad: {producto.quantity}</h4>
                <h4>Sub total: ${producto.price * producto.quantity}</h4>
            </div>
            <div className="contenedor-btn">
                <button className="btn btn-danger boton-eliminar" onClick={eliminarDelCart}>Eliminar</button>
            </div>
        </div>
    )
}

export default Cart;