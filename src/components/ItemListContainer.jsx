//👉 ItemListContainer es el componente encargado de obtener la lista de productos desde Firebase y pasarla a ItemList.
//Es un componente contenedor, no visual puro.
//AVERIGUAR DE DONDE VIENE SI NO ES DE FIREBASE

//Dentro de tu e-commerce, este componente:
//✔ Obtiene productos desde Firestore
//✔ Filtra por categoría si hay parámetro en la URL
//✔ Maneja loading
//✔ Controla cambios de ruta
//✔ Pasa los datos al listado
//✔ Renderiza el Home y las categorías
//👉 Es el punto de entrada del catálogo.

//⚛️ Hooks para estado y efectos: import { useEffect, useState } from "react";
//🧩 Componente visual del listado: import ItemList from "./ItemList";
//➡ Permite leer rutas dinámicas: import { useParams } from "react-router-dom"; EJ: /category/:type
//⏳ Loader visual mientras se cargan productos: import LoaderComponents from "./LoaderComponents";

//Estados del componente: const [data, setData] = useState([]); 👉 📦 Array de productos.
//⏳ Controla el estado de carga: const [loading, setLoading] = useState(false);

//Parámetro de la URL: const { type } = useParams();
//📌 Si existe type, estás en una categoría: EJ: /category/remeras

//useEffect: búsqueda de productos:
//useEffect(() => {
//setLoading(true);
//Se ejecuta al montar el componente y tambien cuando cambia la categoría

//🔥 Definición de la consulta:
//const productsCollection = type
//? query(collection(db, "items"), where("category", "==", type))
//: collection(db, "items");
//📌 Lógica clave:
//Caso	          Consulta
//Home	          Todos los productos
//Categoría	      Productos filtrados
//📥 Lectura de Firestore: getDocs(productsCollection) // devuelve la coleccion de documentos
//🧱 Transformación de datos:
//const list = res.docs.map((doc) => {
//return { ...doc.data(), id: doc.id };
//});
//✔ Convierte documentos de Firebase en objetos JS
//✔ Incluye el id
//✔ Listo para React
//🧠 Actualización de estado: setData(list); o sea que dispara el render del listado.
//⏳ Final del proceso: .finally(() => setLoading(false)); ✔ Cierra el loader pase lo que pase.

//Render condicional, que basicamente controla el UX correctamente:
//{loading ? (
//<LoaderComponents />
//) : (
//<div>...</div>
//)}

//Título dinámico
//<h2>
//{mensaje}
//{type && <span>{type}</span>}
//</h2>
//✔ Muestra mensaje base
//✔ Agrega la categoría si existe
//✔ Capitaliza el texto

//Render del listado, 📦 Pasa los productos al componente visual: <ItemList data={data} />

import "../css/ItemListContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../service/api";
import ItemList from "./ItemList";

const ItemListContainer = ({ mensaje }) => {
  const [data, setData] = useState([]);
  const { type, subcategory } = useParams();

  useEffect(() => {
    if (type && subcategory) {
      getProductsByCategory(type, subcategory)
        .then((res) => setData(res))
        .catch((error) => console.log(error));
    } else {
      getProducts()
        .then((res) => setData(res))
        .catch((error) => console.log(error));
    }
  }, [type, subcategory]);

  return (
    <div>
      <h2 className="text-succes">{mensaje}</h2>
      <ItemList data={data} />
    </div>
  );
};

export default ItemListContainer;
