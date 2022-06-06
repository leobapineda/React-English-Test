import { React, useEffect, useState } from "react";
import axios from "axios";
import Recipe from "./components/Recipe";
export default function App() {

  const YOUR_APP_ID = "1225815e";
  const YOUR_APP_KEY = "e642963f4d2299d6ac085245011970ab";
  const food = 'chicken'

  // the initial value of photos has to be something, otherwise the first render will throw and error because it is trying to use map on an undefined element
  const [recipeName, setRecipeName] = useState([]);
  
  const url2 = "/api/recipes/v2?type=public&q=chicken&app_id=1225815e&app_key=e642963f4d2299d6ac085245011970ab&diet=balanced&random=false"

  const url3 = `https://api.edamam.com/api/recipes/v2?type=public&q=${food}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&diet=balanced&random=false`

 useEffect(() => {
  fetch(`${url3}`)
  .then(res => res.json())
  .then(data => setRecipeName(data.hits))
 }, [])


 console.log(recipeName);

 let map = recipeName.map(item => {
   return(
      <div key={item.recipe.label} >
        <div>{item.recipe.label}</div>
        <img src={item.recipe.image}/>

      </div>
   )
 })

  return (
    <>
    <div>
        {map}
    </div>
    </>
  );
}
