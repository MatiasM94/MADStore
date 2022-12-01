import React from "react";
import { useContext } from "react";
import { Users } from "../../contexts/Users";
import Authentication from "../Authentication/authentication";

const Sesion = () => {
    const {usuario} = useContext(Users);

    if(usuario) window.history.back();

    return <Authentication />
}

export default Sesion;