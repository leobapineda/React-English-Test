import React, { useState } from "react"

export default function Form() {
  const [fullName, setFullName] = useState({
    firstName:'', 
    lastName:'', 
    email:'', 
    comments: '', 
    checkBox: false,
    employed: '',
    favColor: ''
  })
  
 function handleChange(e) {
  const {name, value, type, checked} = e.target

  setFullName( prevFullName => {
    return(
     {
      ...prevFullName,
      [name]: type == 'checkbox' ? checked : value
      
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
                    checked= {fullName.employed == 'unemployed'}

                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    name="employed"
                    value='part-time'
                    id="part-time"
                    onChange={handleChange}
                    checked= {fullName.employed == 'part-time'}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    name="employed"
                    value='full-time'
                    id="full-time"
                    onChange={handleChange}
                    checked= {fullName.employed == 'full-time'}

                />
                <label htmlFor="full-time">Full-time</label>
                <br />
                
            </fieldset>
            <br />
            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select 
            value={fullName.favColor} 
            onChange={handleChange}
            name="favColor"
            >
                <option value="">--Chose--</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>

        </form>
    )
}