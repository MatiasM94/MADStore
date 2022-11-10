import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "../../components/ItemList/itemlist";
import "./styles.css";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    let [products, setProducts] = useState([]);

    const {categoryId} = useParams();

    useEffect(() => {
        ( async () => {
            try {
                let response;

                if (categoryId) {
                    response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?seller_id=224812776&category=${categoryId}`);
                }else {
                    response = await fetch("https://api.mercadolibre.com/sites/MLA/search?nickname=DETALLADO CORTES");
                };

                const data = await response.json();

                if (data.results) setProducts(data.results);

            } catch (error) {
                console.log(error)
            };
        })();
    }, [categoryId])

    return <ItemList products = {products}/>;
}

export default ItemListContainer;