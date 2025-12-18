//👉 CartView es la vista del carrito de compras:
//se encarga exclusivamente de mostrar los productos que el usuario agregó, permitir eliminarlos, vaciar el carrito y continuar al checkout.
//No maneja datos por sí solo: consume información del contexto global (CartContext).

//¿Qué función cumple dentro de tu proyecto?
//Dentro de una app tipo e-commerce, este componente:
//✔ Muestra los productos del carrito
//✔ Calcula y muestra subtotales
//✔ Muestra el total final
//✔ Permite borrar productos individuales
//✔ Permite vaciar todo el carrito
//✔ Lleva al usuario a la pantalla de pago (/checkout)
//✔ Muestra alertas con SweetAlert2

//Imports (qué herramientas usa)
//1-import React, { useContext } from "react";
//1-Usa React y el hook useContext para acceder al carrito global.
//2-import { CartContext } from "../context/CartContext";
//2-Conecta este componente con el estado global del carrito.
//3-import { Link } from "react-router-dom";
//3-permite navegar a la página de checkout sin recargar la página.
//4-Render del carrito
//4-{cart.map((compra) => ( ... ))}
//4-Usa map para iterar sobre los productos en el carrito y mostrarlos. Recorre el array cart y crea una tarjeta por producto.

//Cada tarjeta muestra:
//Imagen
//Nombre
//Precio
//Cantidad
//Subtotal
//Botón para eliminar
