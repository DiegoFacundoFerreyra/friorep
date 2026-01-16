//averiguar de donde importo estos 2 en caso de no usar firebase. OJO, PROBABLEMENTE AHORA LO TENGA QUE USAR IGUAL, AUNQUE VOY A TRATAR DE QUE NO.
//import { collection, addDoc, serverTimestamp } from "firebase/firestore";
//import { db } from "../service/firebase";

//👉 CheckOut es la pantalla final de compra, donde el usuario:
//completa sus datos personales
//confirma la compra
//se genera una orden en Firebase
//recibe un ID de compra
//se vacía el carrito
//Es el último paso del flujo del carrito.

//Dentro de tu e-commerce, este componente:
//✔ Muestra un formulario de compra
//✔ Guarda los datos del comprador
//✔ Usa el carrito como base de la orden
//✔ Crea una orden en Firebase Firestore
//✔ Genera un ID de compra
//✔ Vacía el carrito al finalizar
//✔ Muestra confirmación visual
//✔ Evita comprar con carrito vacío
//👉 Es el puente entre el frontend y la base de datos.

//⚛️ Hooks de React:
//useState → estados locales
//useContext → carrito global
//import { CartContext } from "../context/CartContext";

//INSINSTO, VER SI SE PUEDE EVITAR USAR FIREBASE Y EN CASO DE SER ASI, VER DE DONDE IMPORTAR ESTOS 2.
//🛒 Acceso al carrito y funciones globales.
//import { collection, addDoc, serverTimestamp } from "firebase/firestore";
//import { db } from "../service/firebase";

//import { Link } from "react-router-dom";
//navegación sin recargar la página

//import EmptyCart from "./EmptyCart";
//en caso que el carrito esté vacío

//📋 Guarda los datos del comprador:
//{ name, surname, email }

//✉️ Pensado para validar email (todavía no implementado). ASIQUE OJO, BUSCAR COMO VALIDARLO QUE SE ME ESCAPO LA TORTUGA.
//const [validMail, setValidMail] = useState("");

//🆔 Guarda el ID generado por Firebase. ASIQUE TAL VEZ TAMPOCO LO NECESITE SI LOGRO NO USAR FIREBASE
//const [process, setProcess] = useState(false);

//⏳ Controla si la compra está en proceso (deshabilita botón).
//const [loading, setLoading] = useState(false);

//Acceso al carrito global
//const { cart, clearCart } = useContext(CartContext);
//📦 Obtiene:
//los productos comprados
//la función para vaciar el carrito

//Captura de datos del formulario
//const buyerData = (e) => {
//setBuyer({
//...buyer,
//[e.target.name]: e.target.value,
//});
//};
//📌 Esta función detecta qué input cambió y actualiza dinámicamente el objeto buyer.

//Función principal: finalizar compra
//const finalizarCompra = (e) => {
//e.preventDefault();
//🛑 Evita que el formulario recargue la página.

//📦 Creación de la orden
//let orden = {
//Comprador: buyer,
//Items: cart,
//Total: "",
//Fecha: serverTimestamp(),
//};
//Esta orden contiene:
//datos del comprador
//productos comprados
//total (aún pendiente)
//fecha real del servidor

//Control de estados especiales
//🧺 Carrito vacío sin orden
//if (!cart.length && !orderID) {
//return <EmptyCart />;
//}
//👉 Evita entrar al checkout sin productos.

//Render condicional final
//🆔 Si la orden ya existe
//{orderID ? (
//<div className="order-complete">
//<p>Su número de orden es: {orderID}</p>
//<Link to="/">Volver al inicio</Link>
//</div>
//)}

//📝 Si todavía no se compró
//<form onSubmit={finalizarCompra}>

import "../css/CheckOut.css";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart";
import { createOrderMock } from "../mock/AsyncMock";

const CheckOut = () => {
  const [buyer, setBuyer] = useState({});
  const [validMail, setValidMail] = useState("");
  const [orderID, setOrderID] = useState(null);
  const [process, setProcess] = useState(false);
  const [error, setError] = useState(null);

  const { cart, clearCart } = useContext(CartContext);

  const buyerData = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const finalizarCompra = async (e) => {
    e.preventDefault();

    if (!buyer.name || !buyer.surname || !buyer.email || !validMail) {
      setError("Por favor complete todos los campos");
      return;
    }

    if (buyer.email !== validMail) {
      setError("Los correos no coinciden");
      return;
    }

    setError(null);
    setProcess(true);

    const orden = {
      comprador: buyer,
      items: cart,
      total: cart.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0
      ),
      fecha: new Date(),
    };

    try {
      const res = await createOrderMock(orden);

      setOrderID(res.id);
      clearCart();

      Swal.fire({
        icon: "success",
        title: "¡Gracias por tu compra! 🛍️",
        text: "Tu pedido ha sido procesado correctamente.",
        confirmButtonColor: "#28a745",
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo generar la orden",
      });
    } finally {
      setProcess(false);
    }
  };

  if (!cart.length && !orderID) {
    return <EmptyCart />;
  }

  return (
    <>
      {orderID ? (
        <div className="order-complete">
          <p>
            Su número de orden es: <strong>{orderID}</strong>
          </p>
          <Link to="/">Volver al inicio</Link>
        </div>
      ) : (
        <div>
          <h3>Complete sus datos</h3>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <form onSubmit={finalizarCompra}>
            <input
              name="name"
              type="text"
              placeholder="Nombre"
              required
              onChange={buyerData}
            />
            <input
              name="surname"
              type="text"
              placeholder="Apellido"
              required
              onChange={buyerData}
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              onChange={buyerData}
            />
            <input
              name="email2"
              type="email"
              placeholder="Confirme su Email"
              required
              onChange={(e) => setValidMail(e.target.value)}
            />
            <input type="tel" placeholder="Telefono" required />

            <button type="submit" disabled={process}>
              {process ? "Procesando pedido..." : "Generar orden de compra"}
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default CheckOut;
