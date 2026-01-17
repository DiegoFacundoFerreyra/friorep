//Este archivo define un componente de React llamado Error.
//👉 Error es la pantalla de error 404:
//se muestra cuando el usuario intenta entrar a una ruta que no existe en tu aplicación.

//Dentro de tu proyecto React (SPA), este componente:
//✔ Maneja rutas inexistentes
//✔ Evita pantallas en blanco
//✔ Informa claramente el error
//✔ Guía al usuario de vuelta al inicio
//✔ Mejora la experiencia de usuario
//👉 Es un componente de seguridad de navegación.

//import { Link } from "react-router-dom"; // ➡ Permite navegar a otra ruta sin recargar la página.
//📌 Se usa para volver al inicio (/).

//Definición del componente // const Error = () => {
//📌 Es un componente funcional:
//no usa estado
//no usa contexto
//solo renderiza UI
//👉 Es un componente presentacional puro.

//Mensaje de error:
//<h2 style={{ fontSize: "40px" }}>
//La pagina no existe!! 🤷‍♂️

//</h2>
//❌ Informa claramente que la ruta no es válida.
//✔ Texto grande
//✔ Emoji para empatía
//✔ Mensaje directo

//¿Dónde se usa este componente?
//Normalmente se define en el Router principal:
//<Route path="*" element={<Error />} />
//👉 El * captura cualquier ruta inexistente.

import { Link } from "react-router-dom";
import "../css/Error.css";
const Error = () => {
  return (
    <div className="error-container">
      <h2>Segmento inexistente!! 🤷‍♂️</h2>
      <Link to="/" className="error-btn">
        Volver a la pagina principal...
      </Link>
    </div>
  );
};

export default Error;
