//Este archivo define un componente de React llamado Item.
//👉 Item representa una tarjeta individual de producto dentro de un listado (catálogo).
//No maneja lógica de negocio:
//solo recibe un producto y lo muestra.

//Dentro de tu e-commerce, este componente:
//✔ Muestra la información básica de un producto
//✔ Renderiza una tarjeta visual
//✔ Permite navegar al detalle del producto
//✔ Se reutiliza para todos los productos
//✔ Mantiene el código limpio y escalable
//👉 Es un componente presentacional reutilizable.

//import { Link } from "react-router-dom"; //➡ Permite navegar a otra ruta sin recargar la página.

//Definición del componente // const Item = ({ product }) => {

//📦 Recibe una prop llamada prod.
//Ejemplo de prod:
// Lo que esta en el archivo en este caso .JSON

//Render de la tarjeta
//🖼 Imagen del producto
//<img src={prod.img} alt={prod.name} /> // con esto lo traigo del .JSON
//✔ Muestra imagen
//✔ Usa alt correctamente (accesibilidad)

//Dónde se usa este componente?
//Normalmente en un ItemList:
//{products.map((p) => (
//<Item key={p.id} prod={p} />
//))}

//📌 Item:
//no sabe de dónde vienen los datos
//solo los muestra
//Eso es buena separación de responsabilidades.

import "../css/Item.css";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const Item = ({ prod }) => {
  const { addItem, totalItems } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const stockActual = prod.stock - totalItems(prod.id);

  const onAdd = (cantidad) => {
    addItem(prod, cantidad);
    setAdded(true);
  };

  return (
    <div className="card-item">
      <img src={prod.img} alt={prod.name} className="card-item-img" />
      <h3 className="card-item-tittle">{prod.name}</h3>
      <p className="card-item-price">${prod.price}</p>

      {added ? (
        <Link className="card-item-btn" to={`/item/${prod.id}`}>
          Ver detalle
        </Link>
      ) : (
        <ItemCount stock={stockActual} onAdd={onAdd} />
      )}
    </div>
  );
};

export default Item;
