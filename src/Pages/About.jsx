import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
      <h1>about page</h1>
      <Link className='btn' to='/' >go home</Link>
    </div>
  )
}

export default About
