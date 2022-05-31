import React, { useState } from "react";
import "../style/Box.css";

export default function Box({id, on, handleClick}) {

  const styles = {
    backgroundColor: on ? '#333' : 'transparent'
  }
 
  return(
      <div onClick={() => {handleClick(id)}} style={styles} className="box"></div>
  )
}
