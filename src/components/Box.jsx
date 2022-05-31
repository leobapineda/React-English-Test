import React, { useState } from "react";
import "../style/Box.css";

export default function Box({id, on}) {
  
  const styles = {
    backgroundColor: on ? '#222' : '#eee'
  }

  return(
      <div style={styles} className="box"></div>
  )
}
