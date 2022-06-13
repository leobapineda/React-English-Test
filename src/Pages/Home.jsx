import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>home page</h1>
      <Link className='btn' to='about' >go about</Link>
      <Link className='btn' to='products' >go products</Link>
    </div>
  )
}

export default Home