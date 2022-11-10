import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/cartwidget";
import "./styles.css";

const NavBar = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <Link className="nav_link" to="/">MAD Car Detailing</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse nav_contenedor" id="navbarNav">
                    <ul className="navbar-nav nav_ul">
                        <li className="nav-item">
                            <Link className="nav_link" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav_link" to="/category/MLA431863">Shampoo</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav_link" to="/category/MLA392349">Desengrasantes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav_link" to="/category/MLA429408">Abrillantadores</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav_link" to="/category/MLA392347">Pulidoras</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav_link" to="/category/MLA424490">Pads</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav_link" to="/category/MLA424491">Microfibras</Link>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;