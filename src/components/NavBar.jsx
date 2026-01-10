import "../css/NavBar.css";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const NavBar = () => {
  const { cart } = useContext(CartContext);
  return (
    <nav className="nav-container">
      <NavLink to="/">
        <img
          style={{ width: "120px", height: "64px" }}
          src="/friorep.png"
          alt="FrioRep"
        />
      </NavLink>
      <NavLink className="links" to="/category/aires/convencional">
        Aires acondicionados ON/OFF, convencionales.
      </NavLink>
      <NavLink className="links" to="/category/aires/inverter">
        Aires acondicionados Inverter.
      </NavLink>
      <NavLink className="links" to="/category/aires/black">
        Aires acondicionados Black Inverter.
      </NavLink>
      <NavLink className="links" to="/category/aires/pisotecho">
        Aires acondicionados tipo piso/techo.
      </NavLink>
      <img
        style={{ width: "120px", height: "64px" }}
        src="/fabra.png"
        alt="Fabra"
      />
      {
        <NavLink className="contador" to="/cart">
          <CartWidget counter={cart.length} />
        </NavLink>
      }
      <a
        href="https://wa.me/34168201356"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="img-wh" src="/whatsapp.png" alt="whatsapp" />
      </a>
    </nav>
  );
};

export default NavBar;
