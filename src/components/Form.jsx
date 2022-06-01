import React, { useState } from "react"

export default function Form() {
  const [fullName, setFullName] = useState({firstName:'', lastName:'', email:'', comments: '', checkBox: true})

 function handleChange(e) {
  const {name, value} = e.target

  setFullName( prevFullName => {
    return(
     {
      ...prevFullName,
      [name]: value,
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
            /> <br />
            <input 
            type="checkbox" 
            name="checkbox" 
            id="checkbox"
            checked={fullName.checkBox}
             />
            <label htmlFor="checkbox">Are you friendly?</label>
        </form>
    )
}