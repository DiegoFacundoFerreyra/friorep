import "../css/NavBar.css";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const NavBar = () => {
  const { totalQuantity } = useContext(CartContext);
  return (
    <nav className="nav-container">
      <NavLink to="/">
        <img
          style={{ width: "120px", height: "64px" }}
          src="/friorep.png"
          alt="FrioRep"
        />
      </NavLink>
      <div className="dropdown">
        <span className="links">Aires acondicionados ▾</span>
        <div className="dropdown-content">
          <NavLink to="/category/aires/convencional">
            Convencionales u On/Off
          </NavLink>
          <NavLink to="/category/aires/inverter">Inverter</NavLink>
          <NavLink to="/category/aires/black">Black Inverter</NavLink>
          <NavLink to="/category/aires/pisotecho">Piso/techo</NavLink>
        </div>
      </div>
      <img
        style={{ width: "120px", height: "64px" }}
        src="/fabra.png"
        alt="Fabra"
      />
      {
        <NavLink className="contador" to="/cart">
          <CartWidget counter={totalQuantity()} />
        </NavLink>
      }
      <a
        href="https://wa.me/3416820135"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="img-wh" src="/whatsapp.png" alt="whatsapp" />
      </a>
    </nav>
  );
};

export default NavBar;
