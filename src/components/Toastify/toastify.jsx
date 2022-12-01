import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const ToastifySucces = (mensaje = 'Producto agregado 🛒') => {
    return toast.success(mensaje, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
}

export const ToastError = (stock) => {
    return toast.error(stock, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
}
