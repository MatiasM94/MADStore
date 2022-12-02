import React, { useContext } from "react";
import { Shop } from "../../contexts/Shop";
import Cart from "../Cart/cart";
import "./styles.css"

/**
 * @property {Array} productos recibe a travez del context Shop, los productos que se deben agregar al carrito
 * @returns Envia los productos que se agregan al cart para que sean renderizados por el componente Cart
 */

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