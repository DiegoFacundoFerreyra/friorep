//ItemList es el componente que renderiza el listado de productos, usando el componente Item para cada uno.
//No busca datos, no tiene lógica de negocio: solo recibe datos y los muestra.
//Dentro de tu e-commerce, este componente:
//✔ Recibe un array de productos
//✔ Recorre ese array
//✔ Renderiza una tarjeta por producto
//✔ Usa un componente reutilizable (Item)
//✔ Mantiene el código ordenado
//👉 Es un componente presentacional de listado.

//import React from "react";  👉⚛️ Es necesario para usar JSX.
//🧩 Componente hijo que representa un solo producto // import Item from "./Item";
//👉 ItemList decide cuántos; Item decide cómo.

//Definición del componente
//const ItemList = ({ data }) => {
//📦 Recibe una prop: data → array de productos.
// En mi caso del archivo .JSON

//Render del listado
//{data.map((prod) => (
//<Item key={prod.id} prod={prod} />
//))}
//📌 Qué pasa acá:
//-se recorre el array
//-se renderiza un Item por producto
//-se pasa cada producto como prop
//🔑 Uso correcto de key: key={prod.id}
//✔ Evita errores de React
//✔ Optimiza el render
//✔ Identifica cada elemento

//¿Dónde se usa ItemList? Normalmente dentro de un contenedor: (En el archivo ItemListContainer)
//<ItemListContainer>
//<ItemList data={products} />
//</ItemListContainer>
//📌 El contenedor:
//busca los productos
//maneja loading / error
//📌 ItemList:
//solo los muestra
