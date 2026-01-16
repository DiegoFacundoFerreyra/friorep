//👉 ItemDetail es la pantalla de detalle de un producto, donde el usuario:
//ve toda la información del producto
//elige la cantidad
//agrega el producto al carrito
//luego puede ir directamente al carrito
//Es el punto exacto donde nace la compra.

//Dentro de tu e-commerce, este componente:
//✔ Muestra el detalle completo del producto
//✔ Calcula el stock real disponible
//✔ Integra el contador de unidades (ItemCount)
//✔ Agrega productos al carrito
//✔ Cambia la UI según la acción del usuario
//✔ Conecta producto ↔ carrito
//👉 Es un componente de lógica + UI, no solo visual.

//Import del contador
//import ItemCount from "./ItemCount";
//Componente hijo que maneja la cantidad.
//📌 ItemDetail decide cuándo mostrarlo y qué stock pasarle.

//Hooks de React
//import { useContext, useState } from "react";
//Estados locales + acceso al contexto global.

//CartContext
//const { addItem, totalItems } = useContext(CartContext);
//📦 Accedés a:
//addItem → agrega productos al carrito
//totalItems(id) → cuántas unidades de ese producto ya hay en el carrito
//👉 Esto es muy buena lógica de stock real 👏

//Estado "purchase"
//const [purchase, setPurchase] = useState(false);
//🎯 Controla la UI:
//false → mostrar contador
//true → mostrar botón “Ir al carrito”
//👉 UX moderna y clara.

//Función onAdd
//const onAdd = (cantidad) => {
//addItem(detalle, cantidad);
//setPurchase(true);
//};

//📌 Cuando el usuario agrega:
//Se agrega al carrito
//Se cambia la vista
//👉 Separación perfecta:
//ItemCount → cantidad
//ItemDetail → lógica de compra

//Cálculo del stock real
//const stockActual = detalle.stock - totalItems(detalle.id);
//🔥 Este detalle es nivel avanzado.
//✔ Evita sobreventa
//✔ Tiene en cuenta el carrito actual
//✔ Mantiene consistencia

//Render del detalle
//<h2>{detalle.name}</h2>
//<img src={detalle.img} />
//<span>${detalle.price}</span>
//<p>{detalle.description}</p>
//<small>Stock disponible: {stockActual}</small>
//📌 Muestra toda la info necesaria para decidir la compra.

//Render condicional final (clave)
//{purchase ? (
///<Link to="/cart">Ir al carrito</Link>
//) : (
//<ItemCount stock={stockActual} onAdd={onAdd} />
//)}
//🎯 UX perfecta:
//antes de comprar → elegir cantidad
//después de comprar → ir al carrito

//Mejoras opcionales (nivel PRO+) 🚀
//1️⃣ Ocultar contador si stockActual === 0:
//{stockActual > 0 ? <ItemCount ... /> : <p>Sin stock</p>}

//2️⃣ Formatear precio:
//${detalle.price.toLocaleString()}

//3️⃣ Eliminar console.log(detalle)

//4️⃣ Mostrar mensaje “Agregado con éxito” con Swal

//ESTE USARLO CCUANDO ESTE EL CARTCONTEXT Y BORRAR EL DE ABAJO

/* import "../css/ItemDetail.css";
import ItemCount from "./ItemCount"
import { useContext, useState } from "react";
import {CartContext} "../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ detalle }) => {
  const [purchase, setPurchase] = useState(false);
  const {addItems, totalItems} = useContext(CartContext);
  const onAdd = (cantidad) => {
    addItem(detalle, cantidad);
    setPurchase(true);
  };

  const stockActual = detalle.stock - totalItems(detalle.id);
  return (
    <div className="muestra-detalle">
      <div className="card-item">
        <h2>{detalle.name}</h2>
        <img src={detalle.img} alt={detalle.name} className="card-item-img" />
        <span>${detalle.price}</span>
        <p>{detalle.description}</p>
        <small>Cantidad disponible: {stockActual} unidades</small>
        {purchase ? (
          <Link to="/cart" className="btn-exito">
            Ir al carrito
          </Link>
        ) : (
          <ItemCount stock={stockActual} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
}; 

export default ItemDetail; */

import "../css/ItemDetail.css";
import ItemCount from "./ItemCount";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ detalle }) => {
  const [purchase, setPurchase] = useState(false);
  const { addItem, totalItems } = useContext(CartContext);
  const onAdd = (cantidad) => {
    addItem(detalle, cantidad);
    setPurchase(true);
  };

  const stockActual = detalle.stock - totalItems(detalle.id);

  return (
    <div className="muestra-detalle">
      <div className="card-item">
        <h2>{detalle.name}</h2>
        <img src={detalle.img} alt={detalle.name} className="card-item-img" />
        <span>${detalle.price}</span>
        <p>{detalle.description}</p>
        <small>Cantidad disponible: {stockActual} unidades</small>
        {purchase ? (
          <Link to="/" className="volver">
            Volver al catálogo
          </Link>
        ) : (
          <ItemCount stock={stockActual} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
