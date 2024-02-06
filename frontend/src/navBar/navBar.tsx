import React from "react";
import {Link} from "react-router-dom";
const data=[
    {
        label: "HOME",
        to: "/",
    },
    {
        label: "SIGN UP",
        to: "/register",
    },
    {
        label: "ABOUT US",
        to: "/about",
    },
    {
        label: "CONTACTS",
        to: "/contact",
    }

    
];
const NavBar=()=>{
    return (
        <div>
          <nav className="navbar">
           
            <ul className={`navbar__container__menu`}>
                {
                    data.map((item, key)=> (
                        <li key={key} className="navbar__container__menu__item">
                            <Link className="navbar__container__menu__item__links" to={item.to}>
                                {item.label}
                            </Link>
                        </li>
                    ))
                }
            </ul>
           
          </nav>
        </div>
      );
}
export default NavBar;