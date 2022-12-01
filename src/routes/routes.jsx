import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../components/Root/root";
import Successful from "../components/Successful/successful";
import CartContainer from "../containers/CartContainer/cartContainer";
import ItemDetailContainer from "../containers/ItemDetailContainer/itemDetailContainer";
import ItemListContainer from "../containers/ItemListContainer/itemlistcontainer";
import HomeContainer from "../containers/HomeContainer/homeContainer"
import Sesion from "../components/Sesion/sesion";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <h1>No encontrado</h1>,
        children: [
            {
                path: "/",
                element: <HomeContainer />,
            },
            {
                path: "/productos",
                element: <ItemListContainer />,
            },
            {
                path: "/category/:categoryId",
                element: <ItemListContainer />,
            },
            {
                path: "/detail/:id",
                element: <ItemDetailContainer />,
            },
            {
                path: "/loguin",
                element: <Sesion />,
            },
            {
                path: "/cart",
                element: <CartContainer />,
            },
            {
                path: "/successful",
                element: <Successful />
            }
        ],
    }
]);

const Router = () => {
    return <RouterProvider router = {router} />;
};

export default Router;