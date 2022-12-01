import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const Users = createContext({})

const UsersProvider = ({children}) => {
    const [usuario, setUsuario] = useState(null)
    
    return (
        <Users.Provider value = {{usuario, setUsuario}}>
            {children}
        </Users.Provider>
    )
}

export default UsersProvider;

