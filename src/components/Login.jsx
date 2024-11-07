// Importa React y el hook useState desde la biblioteca de React
import React, { useState } from 'react';

// Define un componente funcional llamado Login
const Login = () => {
    // Declara tres estados locales: username, password y message
    const [nombreUsuario, setUsername] = useState(''); // Estado para el nombre de usuario
    const [contraseña, setPassword] = useState(''); // Estado para la contraseña
    const [message, setMessage] = useState(''); // Estado para el mensaje
    // Define una función handleUsernameChange que se ejecuta cuando cambia el valor del campo de nombre de usuario
    const handleUsernameChange = (e) => {
        // Actualiza el estado username con el nuevo valor
        setUsername(e.target.value);
    };
    // Define una función handlePasswordChange que se ejecuta cuando cambia el valor del campo de contraseña
    const handlePasswordChange = (e) => {
        // Actualiza el estado password con el nuevo valor
        setPassword(e.target.value);
    };
    // Define una función handleSubmit que se ejecuta cuando se envía el formulario
    const handleSubmit = (e) => {
        // Previene el comportamiento por defecto del formulario (recargar la página)
        e.preventDefault();
        // Define valores predefinidos para el nombre de usuario y la contraseña
        const nombreUsuarioPredefinido = 'admin';
        const contraseñaPredefinida = 'contraseña123';
        // Compara el nombre de usuario y la contraseña ingresados con los valores predefinidos
        if (nombreUsuario === nombreUsuarioPredefinido && contraseña === contraseñaPredefinida) {
            // Si las credenciales son correctas, actualiza el estado message con un mensaje de bienvenida
            setMessage(`Bienvenido, ${nombreUsuario}!`);
        } else {
            // Si las credenciales son incorrectas, actualiza el estado message con un mensaje de error
            setMessage('Usuario o contraseña incorrectos');
        }
    };
    // Retorna el JSX que define la estructura del componente
    return (
        <div>
            {/* Título del formulario */}
            <h2>Formulario Login básico - Adrián Tomás Sánchez</h2>
            {/* Formulario que llama a handleSubmit al enviarse */}
            <form onSubmit={handleSubmit}>
                <div>
                    {/* Etiqueta para el campo de nombre de usuario */}
                    <label htmlFor="username">Username:</label>
                    {/* Campo de entrada para el nombre de usuario */}
                    <input
                        type="text" // Tipo de entrada: texto
                        id="username" // Identificador del campo
                        value={nombreUsuario} // Valor del campo vinculado al estado username
                        onChange={handleUsernameChange} // Actualiza el estado username cuando cambia el valor del campo
                        required // Campo obligatorio
                    />
                </div>
                <div>
                    {/* Etiqueta para el campo de contraseña */}
                    <label htmlFor="password">Password:</label>
                    {/* Campo de entrada para la contraseña */}
                    <input
                        type="password" // Tipo de entrada: contraseña
                        id="password" // Identificador del campo
                        value={contraseña} // Valor del campo vinculado al estado password
                        onChange={handlePasswordChange} // Actualiza el estado password cuando cambia el valor del campo
                        required // Campo obligatorio
                    />
                </div>
                {/* Botón para enviar el formulario */}
                <button type="submit">Login</button>
            </form>
            {/* Muestra el componente Mensaje solo si el estado de mensaje tiene un valor */}
            {message && <Mensaje message={message} />}
        </div>
    );
};

// Define un componente funcional llamado Mensaje
const Mensaje = ({ message }) => {
    // Retorna el JSX que define la estructura del componente Mensaje
    return <p>{message}</p>;
};

// Exporta el componente Login para que pueda ser utilizado en otros archivos
export default Login;
// Guarda el token en localStorage
const guardarToken = (token1) => {
    // Define el token que se va a guardar
    const token = 'tu_token_aqui';
    // Guarda el token en localStorage con la clave 'token'
    localStorage.setItem('token', token1);
};

// Recupera el token para futuras llamadas
const recuperarToken = () => {
    // Recupera el token almacenado en localStorage con la clave 'token'
    const token = localStorage.getItem('token');
    // Retorna el token recuperado
    return token;
};

export { guardarToken, recuperarToken };