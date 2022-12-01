import React from "react";
import ItemList from "../../components/ItemList/itemlist";
import "./styles.css";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/loader";
import useFirebase from "../../hooks/useFirebase";

const ItemListContainer = () => {

    const { categoryId } = useParams();

    const [error, products] = useFirebase(categoryId);

    return (
        error ? <h2>{error}</h2> :
        products.length ?
            <ItemList products={products} /> : <Loader />
    );
}

export default ItemListContainer;