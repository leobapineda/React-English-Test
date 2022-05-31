import { React, useState } from "react";
import boxesData from "./components/Boxes";
import "./App.css";
import Box from "./components/Box";

export default function App(props) {
  const [squares, setSquares] = useState(boxesData);

  

  const squareElements = squares.map((square) => {


    return (
      <Box 
      key={square.id}
      on = {square.on}  
      // changeColor = {color}
      />
    );
  });

  return <main>{squareElements}</main>;
}
