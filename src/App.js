import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Error from "./Pages/Error";
import Navbar from "./components/Navbar";

export default function App() {

  return(
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<h1>home</h1>} />
            <Route path="about" element={<h1>about</h1>} />
          </Routes>
        </BrowserRouter>
    </>
  )
}