import { toBeChecked } from "@testing-library/jest-dom/dist/matchers"
import React, { useState } from "react"

export default function Form() {
  
  const [form, setForm] = useState({})

  const handleState = (e) => {
    setForm({
      ...form, 
     [ e.target.name] : e.target.value
    })
  }

  const handleCheck = (e) => {
    setForm({
      ...form, 
     [ e.target.name] : e.target.checked
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('enviado! urray');
  }


    return (
       <>
       <h2>Formulario</h2>
       <form action="" onSubmit={handleSubmit} >
         <label htmlFor="name">Nombre:</label>
         <input 
         type="text" 
         id="name" 
         name="name" 
         defaultValue={form.name} 
         onChange={handleState}
         />
         <br />
         <hr />
         <div>Favorite JS flavor</div>
         <input type="radio" name="sabor" id="vanilla" value='vanilla' onChange={handleState}/>
          <label htmlFor="React">Vanilla</label>
         <br />
         <input type="radio" name="sabor" id="react" value='react'  onChange={handleState}/>
          <label htmlFor="React">React</label>
         <br />
         <input type="radio" name="sabor" id="vue" value='vue' onChange={handleState}/>
          <label htmlFor="React">Vue</label>
         <br />

         <input type="radio" name="sabor" id="other" value='other' onChange={handleState}/>
          <label htmlFor="React">Other</label>
       <br /><hr />
          <p>Elije programa fav</p>
          <select
          name="language"
          onChange={handleState}
          >
            <option value='---' >---</option>
            <option value='js' >js</option>
            <option value='java' >java</option>
            <option value='php'>php</option>
            <option value='ruby' >ruby</option>
          </select>
          <br /><hr />
          <label htmlFor="terminos">Acepto todo sin leer</label>
          <input type="checkbox" name="terminos" id="terminos" onChange={handleCheck}/>
          <br />
          <br />
          <input type="submit" value="Enviar" />
       </form>

       </>
    )
}