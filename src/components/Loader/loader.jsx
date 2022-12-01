import React from "react";
import { ColorRing } from "react-loader-spinner";
import "./styles.css"

const Loader = () => {
    return (
        <div className="pantalla-de-carga">
            <h2>Loading</h2>
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['rgb(212, 57, 57)', 'rgb(212, 57, 57)', 'rgb(212, 57, 57)', 'rgb(212, 57, 57)', 'rgb(212, 57, 57)']}
            />
        </div>
    )
}

export default Loader;

