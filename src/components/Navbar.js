import {Link} from "react-router-dom";
import { useState } from "react";
import { MenuItems } from "../data/MenuItems";
import SearchForm from "./SearchForm";

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  return(
    <nav className="fixed top-[1px] left-[50%] w-[99.2%] z-50  bg-[#fff]
      translate-x-[-50%] px-[15px] rounded-[5px] shadow-[0_5px_15px_0_rgba(0,0,0,.25)]">
      <div className="flex justify-between items-center">
        <Link to={"/"}>
          <h1 className="font-extrabold text-[2rem] text-[#01959a]">
            Safari
          </h1>
        </Link>
        <div className="md:hidden text-[1.5rem] text-[#01959a]" 
          onClick={handleToggle}
        >
          <i className={toggle ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={toggle ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return(
              <li className="max-[767px]:pb-[10px]"
                key={index}>
                <Link className={`${item.cName} text-[#01959a] font-[600] md:p-[0.4rem_1rem]
                  text-[1.1rem] hover:bg-[#01959a] hover:text-[#fff] rounded-[4px] block
                  max-[767px]:p-[1rem]`} 
                  to={item.url}>
                  <i className={`${item.icon} pr-[5px]`}></i>{item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <SearchForm/>
      </div>
    </nav>
  );
}

export default Navbar;