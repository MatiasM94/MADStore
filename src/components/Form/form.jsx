import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Shop } from "../../contexts/Shop";
import { Users } from "../../contexts/Users";
import { useFormik } from "formik";
import * as Yup from "yup";
import { SaveOrder } from "../../services/saveOrder";
import "./styles.css";

const Form = () => {

    const { productos, setEstado, clearCart, calculateTotal } = useContext(Shop);
    const { usuario } = useContext(Users);
    
    const handleClose = () => setEstado(false);

    const navigate = useNavigate();

    const compraFormik = useFormik({
        initialValues: {
            user: usuario.displayName ? usuario.displayName : undefined,
            address: "",
            email: usuario.email,
            phone: ""
        },
        validationSchema: Yup.object({
            user: Yup.string()
                .required("Ingrese su nombre")
                .min(3, "Caracteres minimos: 3")
                .max(20, "Caracteres maximos: 20"),
            address: Yup.string()
                .required("Ingrese su nombre")
                .min(5, "Caracteres minimos: 5")
                .max(30, "Caracteres maximos: 30"),
            email: Yup.string()
                .email("¡Formato no valido!")
                .required("Ingrese su correo electronico"),
            phone: Yup.string()
                .required("Ingrese su número de telefono")
                .min(8, "Caracteres minimos: 8")
                .max(30, "Caracteres maximos: 30")
        }),
        onSubmit: values => {
            (async () => {
                await SaveOrder(
                        values.user,
                        values.address,
                        values.email,
                        values.phone,
                        productos,
                        calculateTotal())
            })()

            setEstado(false);

            clearCart()

            navigate(`/successful`)
        }
    })

    return (
        <div className="contenedor">
            <div className="modalForm">
                <h2>Confirme sus datos para realizar la compra</h2>
                <form onSubmit={compraFormik.handleSubmit}>
                    <label>Nombres</label>
                    <input
                        type="text"
                        name="user"
                        id="user"
                        onChange={compraFormik.handleChange}
                        value={compraFormik.values.user} />
                    {compraFormik.errors.user &&

                    <span className="invalid-form">{compraFormik.errors.user}</span>}

                    <label>Direccion</label>
                    <input
                        type="text"
                        name="address"
                        id="address"
                        onChange={compraFormik.handleChange}
                        value={compraFormik.values.address} />
                    {compraFormik.errors.address &&

                    <span className="invalid-form">{compraFormik.errors.address}</span>}

                    <label>Correo electronico</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={compraFormik.handleChange}
                        value={compraFormik.values.email} />
                    {compraFormik.errors.email &&

                    <span className="invalid-form">{compraFormik.errors.email}</span>}

                    <label>Telefono</label>
                    <input
                        type="number"
                        name="phone"
                        id="phone"
                        onChange={compraFormik.handleChange}
                        value={compraFormik.values.phone} />
                    {compraFormik.errors.phone &&

                    <span className="invalid-form">{compraFormik.errors.phone}</span>}

                    <button type="submit" className="btn btn-primary" >Aceptar</button>
                    <button className="btn btn-danger" onClick={handleClose}>Volver</button>
                </form>
            </div>
        </div>
    )
}

export default Form;