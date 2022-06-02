import { React, useState, useEffect } from "react";

export default function App() {
  const [starWardata, setStarWardata] = useState({});
  const [count, setCount] = useState(1);

  function apiRequest() {
    fetch(`https://swapi.dev/api/people/${count}`)
      .then((response) => response.json())
      .then((data) => setStarWardata((starWardata) => (starWardata = data)));
  }

  useEffect(() => {
    apiRequest();
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        Get next character{" "}
      </button>
      <div>{`the character number is ${count}`}</div>
      <pre>{JSON.stringify(starWardata, null, 2)}</pre>
    </div>
  );
}
