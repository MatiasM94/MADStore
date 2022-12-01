import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { ToastError, ToastifySucces } from "../components/Toastify/toastify";
import { db } from "../firebase/config";
import generateOrderObjet from "./generateOrderObjet";

export const SaveOrder = async (user, address, email, phone, products, total) => {
    try {
        const generatorOrder = generateOrderObjet(
            user,
            address,
            email,
            phone,
            products,
            total)

        let productosEnStock = []

        for (const productInCart of products) {

            const docRef = doc(db, "products", productInCart.id);
            const docSnap = await getDoc(docRef);
            const productInFirebase = { ...docSnap.data(), id: doc.id }

            if (productInCart.quantity > productInFirebase.quantity) productosEnStock.push(productInCart)
        }

        if (productosEnStock.length === 0) {
            products.forEach(async (productInCart) => {

                const productRef = doc(db, "products", productInCart.id);

                const docSnap = await getDoc(productRef);
                const productInFirebase = { ...docSnap.data(), id: doc.id }

                updateDoc(productRef, {
                    quantity: productInFirebase.quantity - productInCart.quantity
                });
            })

            const docRef = await addDoc(collection(db, "orders"), generatorOrder);
            ToastifySucces(`Se genero la orden ${docRef.id} correctamente.`)
            // alert(`Se genero la orden ${docRef.id} correctamente.`)
        }
    }
    catch (error) {
        ToastError(error.message)
    }
}