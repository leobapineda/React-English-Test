import React, { useState } from "react"

export default function Form() {
  const [fullName, setFullName] = useState({firstName:'', lastName:'', email:'', comments: ''})
console.log(fullName);
 function handleChange(e) {
  setFullName( prevFullName => {
    return(
     {
      ...prevFullName,
      [e.target.name]: e.target.value,
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
                value={fullName.firstName}
            /> <br />
            <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                value={fullName.lastName}
            /> <br />
            <input
                type="email"
                name="email"
                placeholder="email@.com"
                onChange={handleChange}
                value={fullName.email}
            /> <br />
            <textarea 
            placeholder="comments"
            name="comments"
            onChange={handleChange}
            defaultValue={fullName.comments}
            /> 
        </form>
    )
}