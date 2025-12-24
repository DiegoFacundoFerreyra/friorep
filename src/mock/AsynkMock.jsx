export const product = [
  {
    id: 1,
    name: "2600 watts ON/OFF",
    description:
      "Aire acondicionado tipo split, marca Electra de 2600 watts ON/FF con 2 años de garantia de fabrica",
    category: "Equipos de aire",
    subcategory: "ON/OFF(convencional)",
    stock: 40,
    price: 661000,
    img: "/destacados/onoff1.png",
  },

  {
    id: 2,
    name: "3200 watts ON/OFF",
    description:
      "Aire acondicionado tipo split, marca Electra de 3200 watts ON/FF con 2 años de garantia de fabrica",
    category: "Equipos de aire",
    subcategory: "ON/OFF(convencional)",
    stock: 40,
    price: 685000,
    img: "/destacados/onoff2.png",
  },

  {
    id: 3,
    name: "5200 watts ON/OFF",
    description:
      "Aire acondicionado tipo split, marca Electra de 5200 watts ON/FF con 2 años de garantia de fabrica",
    category: "Equipos de aire",
    subcategory: "ON/OFF(convencional)",
    stock: 40,
    price: 889000,
    img: "/destacados/onoff3.png",
  },

  {
    id: 4,
    name: "6500 watts ON/OFF",
    description:
      "Aire acondicionado tipo split, marca Electra de 6500 watts ON/FF con 2 años de garantia de fabrica",
    category: "Equipos de aire",
    subcategory: "ON/OFF(convencional)",
    stock: 40,
    price: 1012000,
    img: "/destacados/onoff4.png",
  },

  {
    id: 5,
    name: "2600 watts Inverter",
    description:
      "Aire acondicionado tipo split, marca Electra de 2600 watts con tecnologia Inverter y 3 años de garantia de fabrica",
    category: "Equipos de aire",
    subcategory: "Inverter",
    stock: 40,
    price: 689000,
    img: "/destacados/inverter1.png",
  },

  {
    id: 6,
    name: "3500 watts Inverter",
    description:
      "Aire acondicionado tipo split, marca Electra de 3500 watts con tecnologia Inverter y 3 años de garantia de fabrica",
    category: "Equipos de aire",
    subcategory: "Inverter",
    stock: 40,
    price: 778000,
    img: "/destacados/inverter2.png",
  },

  {
    id: 7,
    name: "5300 watts Inverter",
    description:
      "Aire acondicionado tipo split, marca Electra de 5300 watts con tecnologia Inverter y 3 años de garantia de fabrica",
    category: "Equipos de aire",
    subcategory: "Inverter",
    stock: 40,
    price: 984000,
    img: "/destacados/inverter3.png",
  },

  {
    id: 8,
    name: "6900 watts Inverter",
    description:
      "Aire acondicionado tipo split, marca Electra de 6900 watts con tecnologia Inverter y 3 años de garantia de fabrica",
    category: "Equipos de aire",
    subcategory: "Inverter",
    stock: 40,
    price: 1142000,
    img: "/destacados/inverter4.png",
  },

  {
    id: 9,
    name: "3500 watts Black",
    description:
      "Aire acondicionado tipo split, marca Electra de 3500 watts inverter con 3 años de garantia de fabrica. Este equipo es de color negro y cuenta con WI FI para que lo prendas desde donde quieras y cuando llegues, el lugar tenga la temperatura que tanto queres. Tambien tiene un sistema de filtros especiales que te purifican el aire",
    category: "Equipos de aire",
    subcategory: "Black Inverter",
    stock: 40,
    price: 914000,
    img: "/destacados/Xblackch.png",
  },

  {
    id: 10,
    name: "5300 watts Black",
    description:
      "Aire acondicionado tipo split, marca Electra de 3500 watts inverter con 3 años de garantia de fabrica. Este equipo es de color negro y cuenta con WI FI para que lo prendas desde donde quieras y cuando llegues, el lugar tenga la temperatura que tanto queres. Tambien tiene un sistema de filtros especiales que te purifican el aire",
    category: "Equipos de aire",
    subcategory: "Black Inverter",
    stock: 40,
    price: 1441000,
    img: "/destacados/Xblackgde.png",
  },

  {
    id: 11,
    name: "15000 frigorias ON/OFF",
    description:
      "Aire acondicionado tipo piso-techo, marca Electra de 15000 frigorias ON/FF con 1 años de garantia de fabrica",
    category: "Equipos de aire",
    subcategory: "Piso-techo",
    stock: 20,
    price: 2785000,
    img: "/destacados/15onoff.png",
  },

  {
    id: 12,
    name: "18000 frigorias ON/OFF",
    description:
      "Aire acondicionado tipo piso-techo, marca Electra de 18000 frigorias ON/FF con 1 años de garantia de fabrica",
    category: "Equipos de aire",
    subcategory: "Piso-techo",
    stock: 20,
    price: 3020000,
    img: "/destacados/15inverter.png",
  },

  {
    id: 13,
    name: "15000 frigorias Inverter",
    description:
      "Aire acondicionado tipo piso-techo, marca Electra de 18000 frigorias ON/FF con 1 años de garantia de fabrica",
    category: "Equipos de aire",
    subcategory: "Piso-techo",
    stock: 20,
    price: 3504000,
    img: "/destacados/15inverter.png",
  },

  {
    id: 14,
    name: "18000 frigorias Inverter",
    description:
      "Aire acondicionado tipo piso-techo, marca Electra de 18000 frigorias ON/FF con 1 años de garantia de fabrica",
    category: "Equipos de aire",
    subcategory: "Piso-techi",
    stock: 20,
    price: 3881000,
    img: "/destacados/18inverter.png",
  },
];

let error = false;
export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject("Se produjo un error. Intente mas tarde.");
      } else {
        resolve(products);
      }
    }, 2500);
  });
};

export const getOneProduct = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let prodcut = products.find((item) => item.id === Number(id));
      resolve(product);
    }, 2500);
  });
};
