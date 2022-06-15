import React from "react";
import { Link } from "react-router-dom";
import About from "./About";

function Home() {
  return (
    <div>
      <h1>home page</h1>
      <Link className="btn" to="about">to about</Link>
      <Link className="btn" to="products">to producst</Link>
    </div>
  );
}

export default Home;
