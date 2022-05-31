import React, { useState } from "react";
import "../style/Box.css";

export default function Box({id, on, changeColor}) {
  
  const [onVariable, setonVariable] = useState(on)

  function toggleOn() {
    setonVariable((onVariable) => !onVariable)
  }

  const styles = {
    backgroundColor: onVariable ? '#333' : '#ddd'
  }
 
  return(
      <div onClick={toggleOn} style={styles} className="box"></div>
  )
}
