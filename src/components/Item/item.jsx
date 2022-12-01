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
            <button className="btn btn-primary"> Ver Detalle</button>
            <div className="disponibilidad">
                {producto.quantity > 0 ?
                <p className="disponible">En stock</p>
                :
                <p className="disponible no-disponible">Sin stock</p>}
            </div>
        </div>
    )
}

export default Item