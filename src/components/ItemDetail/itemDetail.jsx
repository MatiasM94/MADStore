import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Shop } from "../../contexts/Shop";
import ItemCount from "../ItemCount/itemcount";
import "./styles.css"

const ItemDetail = ({productDetail}) => {
    const {addProduct, setStock,} = useContext(Shop);
    
    const [cantidad, setCantidad] = useState(0);

    const agregarAlCarrito = (quantity) => {
        setStock(productDetail.quantity);

        addProduct({...productDetail, quantity} );

        setCantidad(quantity);
    }

    return (
        <div className="card-producto">
            <img className="detail-imagen" src={productDetail.picture} alt="producto" />
            <div className="text-producto">
                <h2>{productDetail.title}</h2>
                <h3>${productDetail.price}</h3>
                {cantidad ? <Link to="/cart"><button className="btn btn-primary">Ir al carrito</button></Link>
                : <ItemCount inicial = {1} stock = {productDetail.quantity} onAdd={agregarAlCarrito}/>}
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"/>
        </div>
    )
};

export default ItemDetail;