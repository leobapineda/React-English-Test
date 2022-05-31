import { React, useState } from "react";
import boxesData from "./components/Boxes";
import "./App.css";

export default function App() {
  
  const [squares, setSquares] = useState(boxesData)

  const squareElements = squares.map((square) => {
    return(
      <div className="box" key={square.id} >{square.id}</div>
    )
  })

  return (
    <main>
      {squareElements}
    </main>
  )
}

