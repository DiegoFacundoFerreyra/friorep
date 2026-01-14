// src/service/api.js

const API_URL = "https://tu-api.com"; // después lo cambiás por la real

// 🔹 Obtener TODOS los productos
export const getProducts = async () => {
  const response = await fetch(`${API_URL}/products`);
  if (!response.ok) {
    throw new Error("Error al obtener productos");
  }
  return response.json();
};

// 🔹 Obtener productos por categoría
export const getProductsByCategory = async (type, subcategory) => {
  const response = await fetch(
    `${API_URL}/products?category=${type}&subcategory=${subcategory}`
  );
  if (!response.ok) {
    throw new Error("Error al obtener categoría");
  }
  return response.json();
};

// 🔹 Obtener UN producto por ID
export const getProductById = async (id) => {
  const response = await fetch(`${API_URL}/products/${id}`);
  if (!response.ok) {
    throw new Error("Producto no encontrado");
  }
  return response.json();
};

// 🔹 Crear una orden (checkout)
export const createOrder = async (order) => {
  const response = await fetch(`${API_URL}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order),
  });

  if (!response.ok) {
    throw new Error("Error al crear la orden");
  }

  return response.json();
};
