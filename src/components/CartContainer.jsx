//👉 Es un componente contenedor (Container Component)
//No muestra diseño propio, decide qué componente mostrar según el estado del carrito.

//📌 Qué hace exactamente este archivo
//const { cart } = useContext(CartContext);
//🔹 Obtiene el estado global del carrito desde el CartContext.

//return <>{!cart.length ? <EmptyCart /> : <CartView />}</>;

//🔹 Acá está la lógica principal:
//Estado del carrito	Qué se muestra
//cart.length === 0	<EmptyCart />
//cart.length > 0	<CartView />

// El usuario nunca ve un carrito vacío mal presentado
//React decide automáticamente qué renderizar

import React, { useContext } from "react";
/* import { CartContext } from "../context/CartContext"; */
/* import EmptyCart from "./EmptyCart";
import CartView from "./CartView"; */

const CartContainer = () => {
  const { cart } = useContext(CartContext);
  return <>{!cart.length ? <EmptyCart /> : <CartView />} </>;
};

export default CartContainer;
