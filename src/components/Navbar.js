import "./NavbarStyles.css";
import {Link} from "react-router-dom";
import { MenuItems } from "./MenuItems";
import { useState } from "react";

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  return(
    <nav className="navbar">
      <Link to={"/"} className="navbar-logo"><h1>Safari</h1></Link>
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