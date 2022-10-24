import React from "react";
import CartWidget from "../CartWidget/cartwidget";
import "./styles.css";

const NavBar = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <h1 className="navbar-brand">MAD Car Detailing</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse nav_contenedor" id="navbarNav">
                    <ul className="navbar-nav nav_ul">
                        <li className="nav-item"><a className="nav_link" href="#Inicio">Inicio</a></li>
                        <li className="nav-item"><a className="nav_link" href="#NuestrosProductos">Nuestros Productos</a></li>
                        <li className="nav-item"><a className="nav_link" href="#Faq">Faq</a></li>
                        <li className="nav-item"><a className="nav_link" href="#Contacto">Contacto</a></li>
                    </ul>
                    <CartWidget/>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;