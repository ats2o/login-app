import React from 'react';

// Componente funcional Mensaje que recibe props
const Mensaje = ({ isLoggedIn, errorMessage }) => {
    // Si el usuario está logueado, muestra un mensaje de bienvenida
    if (isLoggedIn) {
        return <div>Bienvenido!</div>;
    }
    // Si hay un mensaje de error, lo muestra
    if (errorMessage) {
        return <div>Error: {errorMessage}</div>;
    }
    // Si no hay mensaje de error y el usuario no está logueado, no muestra nada
    return null;
};

// Exporta el componente Mensaje para que pueda ser utilizado en otros archivos
export default Mensaje;