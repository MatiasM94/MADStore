import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css"

const Item = ({producto}) => {

    const navigate = useNavigate();
    const navigateDetail = () => {
        navigate(`/detail/${producto.id}`)
    };

    return (
        <div onClick={navigateDetail} className="card-detail">
            <img className="imagenes" src={producto.thumbnail} alt="img"></img>
            <p>{producto.title}</p>
            <p>${producto.price}</p>
            <p>en {producto.installments.quantity} cuotas de ${producto.installments.amount}</p>
            <button className="btn btn-primary"> Ver Detalle</button>
        </div>
    )
}

export default Item