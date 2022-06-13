import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div>
      <h1>error page</h1>
      <Link className='btn' to='/' >go home</Link>
    </div>
  )
}

export default Error
