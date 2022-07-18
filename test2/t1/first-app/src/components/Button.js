import React from "react";

export default function Button({ btnClickFunc, btnText }) {
  return (
    <div>
      <button onClick={btnClickFunc}>{btnText}</button>
    </div>
  );
}
