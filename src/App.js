import { React, useState } from "react";
import boxesData from "./components/Boxes";
import "./App.css";

export default function App(props) {
  const [squares, setSquares] = useState(boxesData);

  const styles = {
    backgroundColor: props.darkMode ? '#222' : '#ccc'
  }

  const squareElements = squares.map((square) => {
    return (
      <div style={styles} className="box" key={square.id}>
        {square.id}
      </div>
    );
  });

  return <main>{squareElements}</main>;
}
