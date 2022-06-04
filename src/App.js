import {React, useEffect, useState} from "react";
import axios from "axios";
export default function App() {

  const [pokemon, setPokemon] = useState('')

   useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(data => {
      setPokemon(data.data.name)
      console.log(data.data.name);
    })
   })

    return(
        <div>
           {pokemon}
        </div>
    )
}