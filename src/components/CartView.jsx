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

import React, { useContext } from "react";
/*  import { CartContext } from "../context/CartContext";  */
import "../css/CartView.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CartView = () => {
  const { cart, montoTotal, removeItem, clearCart } = useContext(CartContext);
  const preClearCart = () => {
    Swal.fire({
      title: "¿Seguro que deseas vaciar el carrito?",
      text: "No se guardarán los productos agregados",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, vaciar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito vacío", "", "success");
      }
    });
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title"> 🛒Tu compra</h2>
      <div className="cart-items">
        {cart.map((compra) => (
          <div className="cart-card" key={compra.id}>
            <img src={compra.img} alt="Tu compra" className="cart-img" />
            <div className="cart-info">
              <h3>{compra.name}</h3>
              <p>Precio: ${compra.price}</p>
              <small>Cantidad:{compra.quantity} </small>
              <p className="cart-subtotal">
                Subtotal: ${compra.price * compra.quantity}
              </p>
            </div>
            <button className="btnx" onClick={() => removeItem(compra.id)}>
              X
            </button>
          </div>
        ))}
      </div>
      <footer className="cart-footer">
        <h3>Total a pagar: ${montoTotal()}</h3>
        <div className="cart-actions">
          <button className="btnv" onClick={preClearCart}>
            Vaciar Carrito
          </button>
          <Link className="btnf" to="/checkout">
            Finalizar compra
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default CartView;
