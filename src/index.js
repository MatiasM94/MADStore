import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/js/dist/collapse";
import ShopProvider from "./contexts/Shop";
import UsersProvider from "./contexts/Users";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <UsersProvider>
        <ShopProvider>
            <App />
        </ShopProvider>
    </UsersProvider>
);
