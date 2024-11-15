import "./NavbarStyles.css";
import {Link} from "react-router-dom";
import { useState } from "react";
import { MenuItems } from "../data/MenuItems";

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  return(
    <nav className="navbar">
      <Link to={"/"} className="navbar-logo">
        <h1 className="font-bold">
          Safari
        </h1>
      </Link>
      <div className="menu-icons" onClick={handleToggle}>
        <i className={toggle ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={toggle ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return(
            <li key={index}>
              <Link to={item.url} className={item.cName}><i className={item.icon}></i>{item.title}</Link>
            </li>
          );
        })}
        <button>Sign Up</button>
      </ul>
    </nav>
  );
}

export default Navbar;