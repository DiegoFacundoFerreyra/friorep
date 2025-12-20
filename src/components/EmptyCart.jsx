//👉 EmptyCart es la vista que se muestra cuando el carrito está vacío y el usuario intenta acceder a secciones como:
//el carrito
//el checkout
//Es una pantalla de estado, no de acción.

//¿Qué función cumple dentro de tu proyecto?
//Dentro de tu e-commerce, este componente:
//✔ Informa que el carrito está vacío
//✔ Evita pantallas rotas o vacías
//✔ Guía al usuario de vuelta a los productos
//✔ Mejora la experiencia de usuario (UX)
//✔ Se reutiliza en distintas partes del proyecto
//👉 Es un componente de seguridad y orientación.

//import React from "react"; // ⚛️ Importa React para poder usar JSX.
//import { Link } from "react-router-dom"; // ➡ Permite navegar a otra ruta sin recargar la página.

//Definición del componente // const EmptyCart = () => {
//📌 Es un componente funcional:
//no usa estado
//no usa contexto
//solo renderiza UI
//👉 Es un componente presentacional puro.

//Render del mensaje // <h1>Tu carrito esta vacio 😱</h1>
//🧺 Mensaje claro y emocional:
//informa el estado
//usa emoji para empatía

//¿Dónde se usa este componente?
//Normalmente aparece en:
//🛒 CartContainer // !cart.length ? <EmptyCart /> : <CartView />
