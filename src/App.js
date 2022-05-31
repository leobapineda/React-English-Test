import { React, useState } from "react";
import boxesData from "./components/Boxes";
import "./App.css";
import Box from "./components/Box";

export default function App(props) {
  const [squares, setSquares] = useState(boxesData);

  function toggle(id) {
    console.log(squares);
    let clickSquare = squares.find(item => item.id == id)
    clickSquare.on = !clickSquare.on
    console.log(squares);

    // aqui tengo la duda de si estamos cambiando estado 
    // no entiendo porque el cambio de on del elemento encontrado con find, modifica el mismo elemento dentro del array de la base de datos
    // creo que es porque desde un inicio le estamos diciendo que encuentre el elemento dentro del array squares, entonces al cambiarlo lo cambia dentro del array squares, porque ahi es donde lo encontro. entonces al llamar el setSquares((squares) ya lo estamos llamando con el nuevo valor del array squares con el elemento encontrado modificado. 
    setSquares((squares) => {
     return(
       [...squares]
     )
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
