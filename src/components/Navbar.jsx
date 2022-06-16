import React from "react";
import { NavLink } from "react-router-dom";
import "../stylesheet/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar__container">
      <ul className="navbar__ul">
        <li className="btn">
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "red" : "black" };
            }}
            className="nav__link"
            to="/"
          >
            go home
          </NavLink>
        </li>
        <li className="btn">
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "red" : "black" };
            }}
            className="nav__link"
            to="/about"
          >
            go about
          </NavLink>
        </li>
        <li className="btn">
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "red" : "black" };
            }}
            className="nav__link"
            to="/products"
          >
            go products
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
