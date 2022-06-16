import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
    <Link className="btn"  to='/' >go home</Link>
      <Link className="btn" to="/about">
        go about
      </Link>
      <Link className="btn" to="/products">
        go products
      </Link>
    </>
  );
}

export default Navbar;
