import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import CartWidget from "../CartWidget/cartwidget";
import "./styles.css";
import { useContext } from "react";
import { Users } from "../../contexts/Users";
import logoMad from "../../image/logo_mad_rgb.png"
import { ToastError } from "../Toastify/toastify";

const NavBar = () => {

    const { setUsuario, usuario } = useContext(Users)

    const navigate = useNavigate();

    const iniciarSesion = () => {
        navigate(`/loguin`);
    }

    const cerrarSesion = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setUsuario(null)
        }).catch((error) => {
            ToastError("hubo un error, intentalo de nuevo")
        });
    }
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <Link className="nav_link" to="/"><img className="logo" src={logoMad} alt="" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse nav_contenedor" id="navbarNav">
                    <ul className="navbar-nav nav_ul">
                        <li className="nav-item">
                            <Link className="nav_link" to="/productos">Productos</Link>
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
                    <div className="sesion">
                        {
                            usuario ?
                                <button onClick={cerrarSesion} className="btn-link">Cerrar Sesion</button>
                                :
                                <button onClick={iniciarSesion} className="btn-link">Iniciar sesion</button>
                        }
                        <CartWidget />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;