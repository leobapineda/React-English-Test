import React from "react";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<h1>home page</h1>}/>
        <Route path="about"  element={<h1>about page</h1>}/>
        <Route path="testing"  element={<h1>testing page</h1>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}