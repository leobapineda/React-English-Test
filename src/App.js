import {React, useEffect, useState} from "react";

export default function App() {

    const YOUR_APP_ID = '01debc02';
    const YOUR_APP_KEY = '17db636176a11fa3bf37ae9d8d2ef120'
    // const example = `https://api.edamam.com/api/recipes/v2/0123456789abcdef0123456789abcdef?app_id=${APP_ID}&app_key=${APP_KEY}`
    const example2 = `https://api.edamam.com/search?r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_0123456789abcdef0123456789abcdef&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
    // fetch(example)

    const [state, setState] = useState([])
    
    // fetch('https://pokeapi.co/api/v2/type/5/')
    useEffect(() => {
      fetch(example2)
      .then(response => response.json())
      .then(apiData => setState(apiData.name))
      .catch(console.log('error'))
    }, [])

    return(
        <div>
            {state}
        </div>
    )
}