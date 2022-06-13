import React from "react";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={
          <div>home page</div>
        }/>
      </Routes>
    </BrowserRouter>
    </>
  )
}