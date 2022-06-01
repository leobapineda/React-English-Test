import React, { useState } from "react"

export default function Form() {

  const [firstName, setFirstName] = useState('')

  console.log(firstName);

 function handleChange(e) {
   setFirstName(e.target.value)
  }

    return (
        <form>
          <div>Form</div>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
            />
        </form>
    )
}