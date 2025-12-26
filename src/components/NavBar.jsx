import "..css/NavBar.css";
import CartWidgetIcons from "./CartWidgetIcons";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const arrayList = [{ name: "random" }];
  return (
    <nav className="navContainer">
      <NavLink to="/">
        <img
          style={{ width: "120px", height: "64px" }}
          src="/friorep.png"
          alt="FrioRep"
          name="FrioRep"
        />
      </NavLink>
      <NavLink
        className="links"
        to="/category/Equipos de aire/ON/OFF(convencional)"
      >
        Aires acondicionados ON/OFF, convencionales.
      </NavLink>
      <NavLink className="links" to="/category/Equipos de aire/Inverter">
        Aires acondicionados Inverter.
      </NavLink>
      <NavLink className="links" to="/category/Equipos de aire/Black Inverter">
        Aires acondicionados Black Inverter.
      </NavLink>
      <NavLink className="links" to="/category/Equipos de aire/piso/techo">
        Aires acondicionados tipo piso/techo.
      </NavLink>
    </nav>
  );
};

export default NavBar;
