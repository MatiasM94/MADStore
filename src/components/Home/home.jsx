import React from "react";
import { Link } from "react-router-dom";
import "./styles.css"


const Home = () => {
    return (
        <div className="home">
            <div className="text">
                <h1 className="title">Bienvenido a MAD Store</h1>
                <p className="parrafo">Ingresa en nuestra app para conocer todos nuestros productos</p>
            </div>
            <Link to="/productos">
                <button className="btn btn-primary">Ir al Store</button>
            </Link>
        </div>
        
    )
}

export default Home;