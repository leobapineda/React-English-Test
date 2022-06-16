import React from "react";
import { Link } from "react-router-dom";
import "../stylesheet/Navbar.css"

function Navbar() {
  return (
    <div className="navbar__container" >
      <ul className="navbar__ul" >
        <li className="btn" ><Link className="nav__link" to='/' >go home</Link></li>
        <li className="btn" ><Link className="nav__link" to="/about">go about</Link></li>
        <li className="btn" ><Link className="nav__link" to="/products">go products</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
