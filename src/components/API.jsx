import { React, useState, useEffect } from "react";
import "../style/API.css";
export default function App() {
  const [data, setData] = useState(window.innerWidth);
  
  function handleResize() {
    setData(window.innerWidth);
  }

  useEffect(() => {
    //   only runs at page load because the [] never changes
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
}
