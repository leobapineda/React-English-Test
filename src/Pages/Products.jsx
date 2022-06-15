import React from 'react'
import { Link } from 'react-router-dom'

function Products() {
  return (
    <div>
      <h1>products page</h1>
      <Link className='btn' to='/' >to home</Link>
    </div>
  )
}

export default Products
