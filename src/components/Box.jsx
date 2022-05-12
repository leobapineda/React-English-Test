import React, { useState } from "react";
import "../style/Box.css";

export default function Box({ on, id, handleClick }) {
  

  const personalStyles = {
    backgroundColor: on ? "#222222" : "#ffffff",
  };

  return (
    <div onClick={()=> handleClick(id)} style={personalStyles} className="box"></div>
  );
}
