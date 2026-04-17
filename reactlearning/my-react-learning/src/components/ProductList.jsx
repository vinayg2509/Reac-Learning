import React from 'react'

export default function ProductList() {

    const products = [
  { id: 1, name: "Laptop", price: 999.99 },
  { id: 2, name: "Smartphone", price: 699.49 },
  { id: 3, name: "Headphones", price: 149.99 },
  { id: 4, name: "Keyboard", price: 89.99 },
  { id: 5, name: "Monitor", price: 399.00 },
];


    const productElement=products.map((product)=>{
        return(
            <div  key={product.id}>
                    <h3>{product.name}</h3>
                    <p>Price is $ :{product.price}</p>

            </div>
        )
    })
  return (


    <div>
        <h2>Our Product</h2>
        {productElement}
    </div>
  )
}
