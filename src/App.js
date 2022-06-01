import { React, useState } from "react";
import boxesData from "./components/Boxes";
import "./App.css";
import Box from "./components/Box";

export default function App(props) {
  const [squares, setSquares] = useState(boxesData);

  function toggle(id) {
    setSquares((prevSquare) => {
      return prevSquare.map((square) => {
        return square.id == id ? {...square, on : !square.on} : square
      })
    })
  }

  const squareElements = squares.map((square) => {

    return (
      <Box 
      key={square.id}
      on = {square.on}  
      id = {square.id}  
      handleClick = {toggle}
      />
    );
  });

  return <main>{squareElements}</main>;
}
