import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { ToastError, ToastifySucces } from "../components/Toastify/toastify";


export const Shop = createContext({})

const ShopProvider = ({children}) => {

    const [productos, setProducts] = useState([]);
    const [estadoCompra, setEstado] = useState(false)
    const [stockInFireBase, setStock] = useState(0)
    
    const addProduct = (productToAdd) => {

        const productoRepetido = isInCart(productToAdd.id);

        const posicionEnArray = indexId(productToAdd.id)

        if (productoRepetido){
            const cantidad = productos[posicionEnArray].quantity + productToAdd.quantity;

            cantidad > stockInFireBase ?
            ToastError(`Solo podes agregar ${stockInFireBase - productos[posicionEnArray].quantity} productos más`)
            :
            (ToastifySucces() &&
            setProducts([...productos], productos[posicionEnArray].quantity=cantidad))

        }else{
            setProducts([...productos, productToAdd])
            ToastifySucces()
        }
    };

    const calculateTotal = () => {
        const total = productos.reduce((acc, productoActual) => (acc += productoActual.quantity * productoActual.price), 0)
        return total;
    }

    const removeProduct = (productToRemove) => {
        return setProducts(productos.filter(prod => (prod.id !== productToRemove.id)));

    }

    const clearCart = () => {
        return setProducts([]);
    }

    const isInCart = (id) => {
        return productos.some(product => product.id === id)
    }

    const indexId = (id) => {
        return productos.findIndex(product => (product.id === id))
    }



    return (
        <Shop.Provider value = {{productos, addProduct, calculateTotal, removeProduct, clearCart, estadoCompra, setEstado, stockInFireBase, setStock}}>
            {children}
        </Shop.Provider>
    )
}

export default ShopProvider