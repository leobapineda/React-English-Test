import React from 'react'
import { useParams, Link } from 'react-router-dom'
import data from "../components/Data"

function SingleProduct() {
   const {productId} = useParams()

   const product = data.find((item) => {
    return(item.id == productId)
   }) 

   const {name, image} = product

  return (
    <div>
      <h2>single product</h2>
      <h4>{name}</h4>
      <img style={{width:'250px', display:'block'}} src={image} />
      <Link style={{display:'inline-block'}} className='btn' to='/products' >go products</Link>
    </div>
  )
}

export default SingleProduct
