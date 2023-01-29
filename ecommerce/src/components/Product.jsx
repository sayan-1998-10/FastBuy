import Image from 'next/image'
import React from 'react'
import { urlFor } from 'lib/client'
import Link from 'next/link'


const Product = ({product}) => {
  


  return (
    <Link href={`/product/${product.slug.current}`}>  
      <div className='product-card'>
        <img className='product-image'
          src={urlFor(product && product.image[0])}
          width={250}
          height={250}
          alt={product.name}/>
        <p className='product-name'>{product.name}</p> 
        <p className='product-price'>₹{product.price}</p> 
      </div> 
   </Link>
  )
}

export default Product