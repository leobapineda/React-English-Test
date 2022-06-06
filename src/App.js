import { React, useEffect, useState } from "react";
import axios from "axios";
import Recipe from "./components/Recipe";
export default function App() {

  // const YOUR_APP_ID = "1225815e";
  // const YOUR_APP_KEY = "e642963f4d2299d6ac085245011970ab";

   const YOUR_APP_ID = "a52b4d43";
  const YOUR_APP_KEY = "e0e5c667605f5e91d8275c973531b80a";



  // the initial value of photos has to be something, otherwise the first render will throw and error because it is trying to use map on an undefined element
  const [recipeName, setRecipeName] = useState([]);
  const [food, setFood] = useState('')
  const [submit, setSubmit] = useState('')
  const [generateKey, setGenerateKey] = useState(1)

  const url2 = "/api/recipes/v2?type=public&q=chicken&app_id=1225815e&app_key=e642963f4d2299d6ac085245011970ab&diet=balanced&random=false"

  const url3 = `https://api.edamam.com/api/recipes/v2?type=public&q=${food}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&diet=balanced&random=false`

 useEffect(() => {
  axios.get(`${url3}`)
  // .then(res => res.json())
  .then(APIdata => {
    setRecipeName(APIdata.data.hits)
  })
 }, [submit])

 let map = recipeName.map(item => {

   let recipeItem = item.recipe.ingredients.map(element => {
      
      return(
        <li key={element.text} >{element.text}</li>
      )
    })
    

   return(
      <div key={item.recipe.calories} >
        <div>{item.recipe.label}</div>
        <img src={item.recipe.image}/>
        <ul>
          {recipeItem}
        </ul>
      </div>
   )
 })

 function handleChange(e) {
    setFood(e.target.value)
 }

  function hanbleSubmit(e) {
    e.preventDefault()
    setSubmit(food)
  }

  return (
    <>
    <form onSubmit={hanbleSubmit} >
      <label id="food" >Choose food</label>
      <input type='text'
      name="food input"
      placeholder="Find a recipe"
      className="form--input"
      onChange={handleChange}
      defaultValue={food}

      />
<button>Search</button>
    </form>

    <button>Pizza</button>
    <button>Pizza</button>
    <div>
        {map}
    </div>
    </>
  );
}
