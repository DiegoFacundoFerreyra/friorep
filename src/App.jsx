import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* import { CartProvider } from "./context/CartContext"; */
import CartContainer from "./components/CartContainer";
/* import CheckOut from "./components/CheckOut"; */
import Error from "./components/Error";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      {/*  <CartProvider> */}
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer
              mensaje={"Bienvenidos a la tienda online de Frio Rep"}
            />
          }
        />
        <Route
          path="/category/:type/:subcategory"
          element={<ItemListContainer />}
        />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartContainer />} />
        {/*  <Route path="/checkout" element={<CheckOut />} />  */}
        <Route path="*" element={<Error />} />
      </Routes>
      {/* </CartProvider> */}
    </BrowserRouter>
  );
}

export default App;
