//Es el lugar central donde vive toda la información y lógica del carrito, accesible desde cualquier componente.

//import { createContext, useEffect, useState } from "react";
//✔ createContext → crear el contexto
//✔ useState → manejar el estado del carrito
//✔ useEffect → sincronizar con localStorage

//Creación del Context: export const CartContext = createContext();
//📌 Acá se crea el canal de comunicación global que todavía no tiene datos, solo existe.

//Carrito inicial desde localStorage: const carritoInicial = JSON.parse(localStorage.getItem("cart")) || [];
//✔ Intenta leer el carrito guardado
//✔ Si no existe, usa un array vacío
//👉 Gracias a esto: el carrito no se borra al recargar y la experiencia del usuario es mucho mejor

//CartProvider: export const CartProvider = ({ children }) => {
//📌 Este componente envuelve tu app y comparte el carrito a todos.
//children = todo lo que esté adentro del Provider (App, rutas, etc).

//Estado del carrito: const [cart, setCart] = useState(carritoInicial);
//✔ El carrito vive acá
//✔ Es un array de productos con quantity
//El quantity esta en el .JSON

//Sincronización con localStorage:
//useEffect(() => {
//localStorage.setItem("cart", JSON.stringify(cart));
//}, [cart]);
//📌 Cada vez que cambia cart: Se guarda automáticamente y no hace falta llamarlo manualmente

//addItem (agregar productos): const addItem = (item, qty) => {
//CASO 1: el producto ya existe: if (isInCart(item.id)) {
//✔ Recorre el carrito
//✔ Encuentra el producto
//✔ Suma la cantidad
//return { ...product, quantity: product.quantity + qty };
//Con esto, no mutás el objeto y creás uno nuevo (React friendly)
//CASO 2: producto nuevo: setCart([...cart, { ...item, quantity: qty }]);
//✔ Copia el carrito
//✔ Agrega el producto con cantidad

//isInCart
//const isInCart = (id) => {
//return cart.some((product) => product.id === id);
//};
//✔ Devuelve true o false
//✔ Se usa en addItem

//totalCantidad
//const totalCantidad = cart.reduce(
//(acc, product) => (acc += product.quantity),
//0
//);
//📌 Suma TODAS las cantidades del carrito, usado en: CartWidgetIcons y contador del carrito

//montoTotal, 📌 Calcula el precio final del carrito
//const montoTotal = () => {
//return cart.reduce(
//(acc, product) => acc + product.price * product.quantity,
//0
//);
//};

//totalItems (por producto): const totalItems = (id) => {
//📌 Devuelve cuántas unidades de un producto específico hay en el carrito usado en ItemDetail para calcular stock restante

//Provider y value: <CartContext.Provider value={{ ... }}>
//📌 Acá decidís qué funciones y datos son públicos
//Estás exponiendo: cart, funciones y totales.
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();
const carritoInicial = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(carritoInicial);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addItem = (item, qty) => {
    if (isInCart(item.id)) {
      const updtatedCart = cart.map((product) => {
        if (product.id === item.id) {
          return { ...product, quantity: product.quantity + qty };
        } else {
          return product;
        }
      });
      setCart(updtatedCart);
    } else {
      setCart([...cart, { ...item, quantity: qty }]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeItem = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };

  const totalCantidad = cart.reduce(
    (acc, product) => (acc += product.quantity),
    0,
  );

  const montoTotal = () => {
    return cart.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0,
    );
  };

  const totalItems = (id) => {
    const itemInCart = cart.find((product) => product.id === id);
    if (itemInCart) {
      return itemInCart.quantity;
    } else {
      return 0;
    }
  };

  const totalQuantity = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        clearCart,
        removeItem,
        addItem,
        totalItems,
        montoTotal,
        totalCantidad,
        totalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
