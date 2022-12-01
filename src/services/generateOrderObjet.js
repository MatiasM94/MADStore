const generateOrderObjet = (nombre, address, email, telefono, cart, total) => {
    return {
        buyer: {
            nombre: nombre,
            address: address,
            email: email,
            telefono: telefono,
        },
        items: cart,
        total: total,
        createAt: new Date().toLocaleString()
    }
}

export default generateOrderObjet;