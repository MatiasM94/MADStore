import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { db } from "../firebase/config";

const useFirebase = (categoryId) => {
    const [error, setError] = useState("");
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                let q;
                if (categoryId) q = query(collection(db, "products"), where("category_id", "==", categoryId))
                else q = query(collection(db, "products"));

                const querySnapshot = await getDocs(q);
                const productsFirebase = [];
                querySnapshot.forEach((doc) => {
                    productsFirebase.push({ ...doc.data(), id: doc.id })
                });
                setProducts(productsFirebase);

            } catch (error) {
                setError(error.message);
            };
            
        })();
    }, [categoryId])

    return [error, products];
}

export default useFirebase;