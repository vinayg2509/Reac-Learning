import React from 'react'

export default function Products({title,inStock,category,price}) {
  return (
    <div>
      <h3>{title}</h3>
      <p>Price:{price}</p>
      <p>InStock:{inStock?"Yes":"No"}</p>
      <p>Category :{category.join(',')}</p>







    </div>
  )
}
