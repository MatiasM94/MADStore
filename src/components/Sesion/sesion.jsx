import React from "react";
import { useContext } from "react";
import { Users } from "../../contexts/Users";
import Authentication from "../Authentication/authentication";

/**
 * @property {Object} usuario Recibe a travez del context Users el usuario para realizar una accion u otra segun la condicion de ususario.
 * @returns Devuelve la vista de loguin y registro
 */

const Sesion = () => {
    const {usuario} = useContext(Users);

    if(usuario) window.history.back();

    return <Authentication />
}

export default Sesion;