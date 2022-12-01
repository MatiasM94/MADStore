import React, { useContext } from "react";
import { Shop } from "../../contexts/Shop";
import Cart from "../Cart/cart";
import "./styles.css"

const ItemCart = () => {
    const {productos, clearCart, calculateTotal, setEstado} = useContext(Shop);

    const confirmPurchase = () => {
        setEstado(true)
    }
    return (
        <div className="cart-container">
            {productos.map(producto => {
                return <Cart key={producto.id} producto={producto}/>
            })}
            <div className="boton-total">
                <span className="total"><h3>Total: ${calculateTotal()}</h3></span>
                <button className="btn btn-primary buy" onClick={confirmPurchase}>Comprar</button>
                <button className="btn btn-danger" onClick={clearCart} >VaciarCarrito</button>
            </div>
        </div>
    )
}

export default ItemCart;