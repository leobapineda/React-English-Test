import { React, useState, useEffect } from "react";

export default function App() {
  const [starWardata, setStarWardata] = useState({});
  console.log("api");

  function apiRequest() {
      console.log('API request');
    fetch("https://swapi.dev/api/people/1")
      .then((response) => response.json())
      .then((data) => setStarWardata((starWardata) => (starWardata = data)
      ));
  }
  useEffect(() => {
    apiRequest()
  }, []);

  return ( 
    <div> 
      <pre>
          
          {JSON.stringify(starWardata, null, 2)}
      
      </pre>
    </div>
  );
}



for(let i=1; i<= 100; i++ ){

}