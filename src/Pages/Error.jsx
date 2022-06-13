import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div>
      <h1>404</h1>
      <p>error page</p>
      <Link className='btn' to='/' >go home</Link>
    </div>
  )
}

export default Error
