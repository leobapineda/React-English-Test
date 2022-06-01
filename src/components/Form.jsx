import React, { useState } from "react"

export default function Form() {
  const [fullName, setFullName] = useState({firstName:'', lastName:''})
  console.log(fullName);

 function handleChange(e) {
  setFullName( prevFullName => {
    return(
     {
      ...prevFullName,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value
     }
    ) 
  })
  }

    return (
        <form>
          <div>Form</div>
            <input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
            />
            <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
            />
        </form>
    )
}