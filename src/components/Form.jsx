import React, { useState } from "react"

export default function Form() {
  
  const [name, setName] = useState('lol chan')



    return (
       <>
       <h2>Formulario</h2>
       <form action="">
         <label htmlFor="name">Nombre:</label>
         <input 
         type="text" 
         id="name" 
         name="name" 
         defaultValue={name} 
         onChange={(e) => {
           setName(e.target.value)
         }}/>
       </form>
       <div>{name}</div>
       </>
    )
}