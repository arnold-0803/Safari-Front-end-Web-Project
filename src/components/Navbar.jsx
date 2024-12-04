import {NavLink} from "react-router-dom";
import { useState } from "react";
import { MenuItems } from "../data/data";
import SearchForm from "./SearchForm";

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  return(
    <nav className="fixed top-[1px] left-[50%] w-[99.2%] z-50  bg-[#fff]
      translate-x-[-50%] rounded-[5px] shadow-[0_5px_15px_0_rgba(0,0,0,.25)]">
      <div className="flex justify-between items-center">
        <h1 className="font-extrabold text-[2rem] text-[#01959a] bg-[#fff]
          pl-[15px] max-[767px]:w-full text-start">
          <NavLink to={"/"}>
            Safari
          </NavLink>
        </h1>
        <div className="menubar min-[850px]:hidden text-[1.5rem] text-[#01959a] bg-[#fff]
          pr-[15px]" 
          onClick={handleToggle}
        >
          <i className={toggle ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={toggle ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return(
              <li key={index}>
                <NavLink className={`${item.cName} text-[#01959a] font-[600] md:p-[0.4rem_1rem]
                  text-[1.1rem] md:hover:bg-[#01959a6e] md:hover:text-[#fff] rounded-[4px] block
                  max-[767px]:p-[1rem] z-[-1]`} 
                  to={item.url}>
                  <i className={`${item.icon} pr-[5px]`}></i>{item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="px-[5px]">
        <SearchForm/>
      </div>
    </nav>
  );
}

export default Navbar;