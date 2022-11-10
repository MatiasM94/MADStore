import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/itemDetail";

const ItemDetailContainer = () => {

    const {id} = useParams()

    let [productDetail, setDetails] = useState(null)

    useEffect(() => {
        ( async () => {
            try {
                let response;

                if (id) response = await fetch(`https://api.mercadolibre.com/items?ids=${id}`);

                const data = await response.json();

                if (data[0]) setDetails(data[0].body);

            } catch (error) {
                console.log(error)
            }
        })()
    }, [id])

    return (productDetail ? <ItemDetail productDetail={productDetail}/> : <p>No hay coincidencia</p>);
};

export default ItemDetailContainer;