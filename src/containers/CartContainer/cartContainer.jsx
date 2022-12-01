import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Authentication from "../../components/Authentication/authentication";
import Form from "../../components/Form/form";
import ItemCart from "../../components/ItemCart/itemcart";
import { Shop } from "../../contexts/Shop";
import { Users } from "../../contexts/Users";


const CartContainer = () => {

    const {productos,  estadoCompra} = useContext(Shop);
    const { usuario } = useContext(Users);

    return (
        estadoCompra && usuario && productos.length ? <Form /> :
        (estadoCompra && usuario === null) ? <Authentication /> :
        productos.length ?
        <ItemCart/>
        :
        <div className="cart-empty">
            <h1>No hay productos en el carrito</h1>
            <Link to = "/productos"><button className="btn btn-primary">Seguir comprando</button></Link>
        </div>
    )
}

export default CartContainer;