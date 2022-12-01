import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/itemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import Loader from "../../components/Loader/loader";
import { ToastError } from "../../components/Toastify/toastify";


const ItemDetailContainer = () => {

    const {id} = useParams()
    const [productDetail, setDetails] = useState(null);

    useEffect(() => {
        ( async () => {
            try {
                const docRef = doc(db, "products", id);
                const docSnap = await getDoc(docRef);
                
                if (docSnap.exists()) {
                    setDetails({...docSnap.data(), id: docSnap.id})
                }
            } catch (error) {
                ToastError("Ocurrio un error, intentalo de nuevo")
            }
        })()
    }, [id])

    return (
        <>
            {productDetail ? <ItemDetail productDetail={productDetail}/> : <Loader />}
        </>
        );
};

export default ItemDetailContainer;