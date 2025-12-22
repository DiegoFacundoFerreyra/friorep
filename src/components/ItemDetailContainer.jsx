//👉 ItemDetailContainer es el componente encargado de buscar un producto específico y entregárselo a ItemDetail.
//No muestra el producto por sí solo:
//obtiene los datos
//maneja estados
//valida errores
//controla el loading
//Es un componente contenedor.

//Dentro de tu e-commerce, este componente:
//✔ Lee el ID del producto desde la URL
//✔ Busca el producto en Firebase
//✔ Maneja loading
//✔ Maneja error (producto inexistente)
//✔ Envía el producto al componente visual
//✔ Evita renderizar datos incompletos
//👉 Es el intermediario entre la ruta y el detalle del producto.

//Imports 👉 import React, { useEffect, useState } from "react";
//⚛️ Hooks principales:
//useState → estados
//useEffect → efecto al montar / cambiar ID

//import ItemDetail from "./ItemDetail";
//🧩 Componente hijo:
//recibe los datos
//se encarga de mostrarlos
//👉 Separación perfecta: datos vs UI.

//import { Link, useParams } from "react-router-dom"; 👉 que te permite leer: /item/:id

//import LoaderComponent from "./LoaderComponents";
//⏳ Es el componente visual de carga. // Osea que mejora UX mientras se esperan datos.

//Estados del componente
//const [detalle, setDetalle] = useState({}); 👉 📦 Guarda el producto obtenido.
//const [loading, setLoading] = useState(true); 👉 ⏳ Controla el estado de carga.
//const [invalid, setInvalid] = useState(null); 👉 ❌ Detecta si el producto no existe.

//Lectura del ID desde la URL
//const { id } = useParams();
//📌 Obtiene el ID dinámico del producto.
// ej: id === "5"

//useEffect: búsqueda del producto  👉 useEffect(() => {
// Se ejecuta:
//al montar el componente
//cada vez que cambia el id

//🔥 Referencia al documento
//const docRef = doc(db, "items", id);
//📂 Apunta a: Firestore → items → id
//📥 Obtención del documento: getDoc(docRef)
//✅ Si el producto existe
//if (res.data()) {
//setDetalle({ id: res.id, ...res.data() });
//}
//✔ Guarda el producto
//✔ Incluye el id
//✔ Objeto completo listo para usar
//❌ Si el producto NO existe
//else {
//setInvalid(true);
//}
//⏳ Finalización del proceso
//.finally(() => setLoading(false));
//📌 Pase lo que pase: se corta el loading

//Manejo de producto inválido
//if (invalid) {
//return (
//<div>
//<h2>El producto no existe</h2>
//<Link to="/">Volver al inicio</Link>
//</div>
//);
//}
//❌ Producto inexistente
//✔ Mensaje claro
//✔ Opción de recuperación
//👉 UX sólida.

//Render principal
//{loading ? (
//<LoaderComponent />
//) : (
//<ItemDetail detalle={detalle} />
//)}
//📌 Render condicional clásico y correcto:
//Estado	    Qué se muestra
//loading	    Loader
//listo	        ItemDetail
//ItemDetailContainer nunca muestra datos incompletos.

//Mejoras opcionales (nivel PRO+) 🚀
//1️⃣ Inicializar invalid en false en lugar de null
//2️⃣ Mostrar un componente Error en vez de JSX inline
//3️⃣ Manejar errores con Swal
//4️⃣ Tipar mejor el estado inicial: useState(null)
