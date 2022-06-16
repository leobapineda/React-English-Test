import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import About from "./About";

function Home() {
  return (
    <div>
      {/* this is the shared layout */}
      <Navbar />
      {/* this is the shared layout */}
      {/* this is the content of the other pages */}
      <Outlet />
      {/* this is the content of the other pages */}
    </div>
  );
}

export default Home;
