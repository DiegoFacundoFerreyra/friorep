//👉 CartWidget es el ícono del carrito que normalmente se muestra en el Navbar/Header de tu app, junto con un contador de productos.
//No muestra el detalle del carrito, solo:
//el ícono
//la cantidad de productos agregados

//Dentro de tu e-commerce, este componente:
//✔ Muestra el ícono del carrito
//✔ Muestra cuántos productos hay en el carrito
//✔ Se actualiza cuando cambia el contador
//✔ Sirve como acceso rápido al carrito

//Definición del componente
//const CartWidget = (props) => {
//🔹Es un componente funcional que recibe props (aunque en este caso no las usa).
//props.counter
//🔹 Usa el prop counter para mostrar la cantidad de productos en el carrito.

//📌 Nota importante:
//En React, lo más correcto sería:
//import carrito from "../assets/carrito.png";
//<img src={carrito} />

//<span className="cart-counter">{props.counter}</span> 🔹 Muestra el ícono del carrito y el contador de productos usando JSX.
//Este valor:
//viene desde un componente padre
//normalmente desde el CartContext
//Ejemplo típico:
//<CartWidget counter={cart.length} />

import "../css/CartWidget.css";

const CartWidget = ({ counter }) => {
  return (
    <div>
      <img
        src="/carrito.png"
        alt="Carrito"
        style={{ width: "40px", height: "40px" }}
      />
      <small className="cart-counter">{counter}</small>
    </div>
  );
};

export default CartWidget;
