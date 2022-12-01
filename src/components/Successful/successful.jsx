import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Users } from "../../contexts/Users"
import "./styles.css"

const Successful = () => {

    const {usuario} = useContext(Users)

    return (
        <div className="successful">
            <h2>{usuario.displayName}, Gracias por realizar tú compra en nuestra app.</h2>
            <p>Te enviamos los detalles de la compra a {usuario.email}</p>
            <Link to="/productos"><button className="btn btn-primary">Volver a la tienda</button></Link>
        </div>
    )
}

export default Successful;