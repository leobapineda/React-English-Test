import React, { useState } from "react"

export default function Form() {
  const [fullName, setFullName] = useState({
    firstName:'', 
    lastName:'', 
    email:'', 
    comments: '', 
    checkBox: true,
    employed: ''
  })
  console.log(fullName.employed);
  console.log(fullName.employed);
 function handleChange(e) {
  const {name, value, type, checked} = e.target
  // const {name, value} = e.target

  setFullName( prevFullName => {
    return(
     {
      ...prevFullName,
      [name]: type == 'checkbox' ? checked : value
      // [name]:  value
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
            id="isFriendly"
            onChange={handleChange}
            defaultChecked={fullName.checkBox}
             />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <fieldset>
                <legend>Current employment status</legend>
                
                <input 
                    type="radio"
                    name="employed"
                    value='unemployed'
                    id="unemployed"
                    onChange={handleChange}

                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    name="employed"
                    value='part-time'
                    id="part-time"
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    name="employed"
                    value='full-time'
                    id="full-time"
                    onChange={handleChange}

                />
                <label htmlFor="full-time">Full-time</label>
                <br />
                
            </fieldset>


        </form>
    )
}