import React, { useContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Users } from "../../contexts/Users";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./styles.css"
import { Shop } from "../../contexts/Shop";

/**
 * @returns Devuelve las vistas al form de inicio de sesion o de registro con sus respectivas validaciones.
 */

const Authentication = () => {

    const { setUsuario } = useContext(Users);
    const { estadoCompra, setEstado } = useContext(Shop)
    const [usuarioRegistrado, setUsuarioRegistrado] = useState(true);
    const [errorLoguin, setError] = useState(null)

    const cambiarEstado = () => {
        setUsuarioRegistrado(!usuarioRegistrado);
    }

    const formik = useFormik({
        initialValues: {
            user: "",
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            user: Yup.string()
                .required("Ingrese su nombre")
                .min(3, "Caracteres minimos: 3")
                .max(20, "Caracteres maximos: 20"),
            email: Yup.string()
                .email("¡Formato no valido!")
                .required("Ingrese su correo electronico"),
            password: Yup.string()
                .required("Ingrese una contraseña valida")
                .min(6, "Caracteres minimos: 6")
                .max(30, "Caracteres maximos: 30")
        }),
        onSubmit: values => {
            const {user, email, password} = values;
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
                .then((userInFirebase) => {
                    updateProfile(auth.currentUser, {
                        displayName: user,
                    });
                    setUsuario(userInFirebase.user);
                })
                .catch((error) => {
                    setError(error)
                });
        }
    })

    const sesionFormik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("¡Correo electronico invalido!")
                .required("Ingrese su correo electronico"),
            password: Yup.string()
                .required("Ingrese una contraseña valida")
                .min(6, "Caracteres minimos: 6")
                .max(30, "Caracteres maximos: 30")
        }),
        onSubmit: values => {
            const {email, password} = values;
            const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUsuario(user)
            })
            .catch((error) => {
                setError(error)
            });
        }
    })

    const volver = () => {
        if (estadoCompra) setEstado(false)
        else window.history.back();
        
    }

    return (
        <div className="sesion-form">
            {usuarioRegistrado 
                ?
                <h2 className="form-title">Inicia sesion para comenzar tus compras</h2> 
                :
                <h2 className="form-title">Registrate para iniciar tus compras</h2>}
            {usuarioRegistrado 
                ?
                <form onSubmit={sesionFormik.handleSubmit}>
                    <label>email</label>
                    <input 
                        className={(sesionFormik.errors.email ? "invalid-input"  : null, "inputs-form")}
                        placeholder="ingrese su correo electronico"
                        type="email"
                        name="email"
                        id="email"
                        onChange={sesionFormik.handleChange}
                        value={sesionFormik.values.email} />
                    {sesionFormik.errors.email &&
                    <span className="invalid-form">{sesionFormik.errors.email}</span>}

                    <label>Contraseña</label>
                    <input 
                        className={(sesionFormik.errors.email ? "invalid-input"  : null, "inputs-form")}
                        placeholder="ingrese su contraseña"
                        type="password"
                        name="password"
                        onChange={sesionFormik.handleChange}
                        value={sesionFormik.values.password} />
                    {sesionFormik.errors.password &&
                    <span className="invalid-form">{sesionFormik.errors.password}</span>}

                    {errorLoguin && <span className="invalid-form">Contraseña o Correo electronico no válido.</span>}
                    <button type="submit" className="btn btn-primary boton-sesion">Iniciar sesion</button>
                </form> 
                :
                <form onSubmit={formik.handleSubmit}>
                    <label>Nombre*</label>
                    <input
                        className={(formik.errors.user ? "invalid-input"  : null, "inputs-form")} 
                        type="text"
                        name="user"
                        id="user"
                        placeholder="Escribe tu nombre..."
                        onChange={formik.handleChange}
                        value={formik.values.user}/>
                    {formik.errors.user &&
                    <span className="invalid-form">{formik.errors.user}</span>}

                    <label>email*</label>
                    <input
                        className={(formik.errors.email ? "invalid-input"  : null, "inputs-form")} 
                        type="email"
                        name="email"
                        id="name"
                        onChange={formik.handleChange}
                        value={formik.values.email} />
                    {formik.errors.email &&
                    <span className="invalid-form">{formik.errors.email}</span>}

                    <label>Contraseña*</label>
                    <input
                        className={(formik.errors.password ? "invalid-input"  : null, "inputs-form")} 
                        type="password"
                        name="password"
                        id="password"
                        onChange={formik.handleChange}
                        value={formik.values.password} />
                    {formik.errors.password &&
                    <span className="invalid-form">{formik.errors.password}</span>}

                    <button type="submit" className="btn btn-primary">Registrarme</button>
                    {errorLoguin && <span className="invalid-form">Lo siento, hubo un error en el registro, vuelve a intentarlo.</span>}
                </form>}
            <div className="sesion-btn">
                {
                    usuarioRegistrado ? <p>¿No tenes una cuenta? Registrate gratis!</p>
                    :
                    <p>¿Estas registrado? inicia sesion aqui!</p>
                }
                <button className="btn btn-primary loguin-registro" onClick={cambiarEstado}>
                    {usuarioRegistrado ?
                    "Registrate!" :
                    "Inicia Sesion!"}
                </button>
                <button className="btn btn-danger" onClick={volver}>Volver</button>
            </div>
        </div>
    )
}

export default Authentication;