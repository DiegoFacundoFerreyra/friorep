// 📦 BASE DE DATOS FALSA (PRODUCTOS)
export const products = [
  {
    id: 1,
    name: "2600 watts ON/OFF",
    description:
      "Aire acondicionado tipo split, marca Electra de 2600 watts ON/OFF con 2 años de garantia de fabrica",
    category: "aires",
    subcategory: "convencional",
    stock: 40,
    price: 661000,
    img: "/destacados/onoff1.png",
  },
  {
    id: 2,
    name: "3200 watts ON/OFF",
    description:
      "Aire acondicionado tipo split, marca Electra de 3200 watts ON/OFF con 2 años de garantia de fabrica",
    category: "aires",
    subcategory: "convencional",
    stock: 40,
    price: 685000,
    img: "/destacados/onoff2.png",
  },
  {
    id: 3,
    name: "5200 watts ON/OFF",
    description:
      "Aire acondicionado tipo split, marca Electra de 5200 watts ON/OFF con 2 años de garantia de fabrica",
    category: "aires",
    subcategory: "convencional",
    stock: 40,
    price: 889000,
    img: "/destacados/onoff3.png",
  },
  {
    id: 4,
    name: "6500 watts ON/OFF",
    description:
      "Aire acondicionado tipo split, marca Electra de 6500 watts ON/OFF con 2 años de garantia de fabrica",
    category: "aires",
    subcategory: "convencional",
    stock: 40,
    price: 1012000,
    img: "/destacados/onoff4.png",
  },
  {
    id: 5,
    name: "2600 watts Inverter",
    description:
      "Aire acondicionado tipo split, marca Electra de 2600 watts Inverter con 3 años de garantia",
    category: "aires",
    subcategory: "inverter",
    stock: 40,
    price: 689000,
    img: "/destacados/inverter1.png",
  },
  {
    id: 6,
    name: "3500 watts Inverter",
    description:
      "Aire acondicionado tipo split, marca Electra de 3500 watts Inverter con 3 años de garantia",
    category: "aires",
    subcategory: "inverter",
    stock: 40,
    price: 778000,
    img: "/destacados/inverter2.png",
  },
  {
    id: 7,
    name: "5300 watts Inverter",
    description:
      "Aire acondicionado tipo split, marca Electra de 5300 watts Inverter con 3 años de garantia",
    category: "aires",
    subcategory: "inverter",
    stock: 40,
    price: 984000,
    img: "/destacados/inverter3.png",
  },
  {
    id: 8,
    name: "6900 watts Inverter",
    description:
      "Aire acondicionado tipo split, marca Electra de 6900 watts Inverter con 3 años de garantia",
    category: "aires",
    subcategory: "inverter",
    stock: 40,
    price: 1142000,
    img: "/destacados/inverter4.png",
  },
  {
    id: 9,
    name: "3500 watts Black",
    description:
      "Aire acondicionado inverter negro con WiFi y filtros purificadores",
    category: "aires",
    subcategory: "black",
    stock: 40,
    price: 914000,
    img: "/destacados/Xblackch.png",
  },
  {
    id: 10,
    name: "5300 watts Black",
    description:
      "Aire acondicionado inverter negro con WiFi y filtros purificadores",
    category: "aires",
    subcategory: "black",
    stock: 40,
    price: 1441000,
    img: "/destacados/Xblackgde.png",
  },
  {
    id: 11,
    name: "15000 frigorias ON/OFF",
    description: "Aire acondicionado piso-techo ON/OFF con 1 año de garantia",
    category: "aires",
    subcategory: "pisotecho",
    stock: 20,
    price: 2785000,
    img: "/destacados/15onoff.png",
  },
  {
    id: 12,
    name: "18000 frigorias ON/OFF",
    description: "Aire acondicionado piso-techo ON/OFF con 1 año de garantia",
    category: "aires",
    subcategory: "pisotecho",
    stock: 20,
    price: 3020000,
    img: "/destacados/15inverter.png",
  },
  {
    id: 13,
    name: "15000 frigorias Inverter",
    description: "Aire acondicionado piso-techo Inverter con 1 año de garantia",
    category: "aires",
    subcategory: "pisotecho",
    stock: 20,
    price: 3504000,
    img: "/destacados/15inverter.png",
  },
  {
    id: 14,
    name: "18000 frigorias Inverter",
    description: "Aire acondicionado piso-techo Inverter con 1 año de garantia",
    category: "aires",
    subcategory: "pisotecho",
    stock: 20,
    price: 3881000,
    img: "/destacados/18inverter.png",
  },
];

// ⏳ Simula tiempo de servidor
const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));
let error = false;

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getOneProduct = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((item) => item.id === Number(id));
      product ? resolve(product) : reject("Producto no encontrado");
    }, 1000);
  });
};

// ===================
// CREAR ORDEN (MOCK)
// ===================

export const createOrderMock = (order) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: Date.now(), // ID falso tipo Firebase
        ...order,
      });
    }, 1500);
  });
};

export const getProductsByCategory = (type, subcategory) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = products.filter(
        (item) => item.category === type && item.subcategory === subcategory
      );
      resolve(filtered);
    }, 1000);
  });
};
