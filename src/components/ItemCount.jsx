//👉 ItemCount es el contador de unidades de un producto, que permite:
//aumentar o disminuir la cantidad
//respetar el stock disponible
//agregar esa cantidad al carrito
//Es el puente entre el producto y el carrito.

//Dentro de tu e-commerce, este componente:
//✔ Controla cuántas unidades quiere el usuario
//✔ Evita superar el stock
//✔ Evita cantidades negativas
//✔ Envía la cantidad elegida al carrito
//✔ Muestra un mensaje si no hay stock
//👉 Es un componente de interacción crítica.

//Hooks de React
//import { useState, useEffect } from "react";
//📌 Usás:
//useState ✅ (bien)
//useEffect ❌ (no se usa en el componente) asique se puede eliminar tranquilamente.

//Props del componente:
//const ItemCount = ({ stock, onAdd }) => {
//Recibe dos props muy importantes:
//stock	(Límite máximo)
//onAdd	(Función que agrega al carrito)
//📌 ItemCount no agrega productos por sí mismo, solo informa cuántos.

//Estado local del contador // const [count, setCount] = useState(1);
//Arranca en 1:
//decisión correcta en e-commerce
//evita agregar 0 productos

//Render condicional por stock
//{stock > 0 ? (
//...
//) : (
//<p>Sin stock disponible</p>
//)}
//✔ UX correcta
//✔ Evita interacción si no hay stock
//✔ Mensaje claro

//LEER ANTES DE HACER EL ARCHIVO
//Mejoras recomendadas (nivel PRO) 🚀
//1️⃣ Evitar agregar 0 productos:
//if (count > 1)

//2️⃣ Deshabilitar botones según estado:
//<button disabled={count === stock}>+</button>
//<button disabled={count === 1}>-</button>

//3️⃣ Eliminar useEffect si no se usa

//4️⃣ Resetear contador después de agregar:
//onAdd(count);
//setCount(1);
