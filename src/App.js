import React from "react";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";

export default function App() {
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="about"  element={<About />}/>
        <Route path="products"  element={<Products />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}