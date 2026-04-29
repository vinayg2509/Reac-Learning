import React from 'react'
import { useState } from 'react'

export default function ShoppingCart() {
  return (
    <div>
        <h3>Shopping Cart</h3>
        <ProductCard/>
        <CartSummary/>
    </div>
  )
}


export const ProductCard=()=>{

     const[quantity,setQuantity]= useState(0)

     return(
     <div>
    
        <h3>React Cource</h3>
        <p>Price :500</p>
        <p>Quantity:{quantity}</p>
        <button onClick={()=>setQuantity(quantity+1)}>Add Cart</button>
     </div>
     )
}



export const  CartSummary=()=> {
  return (
    <div>
          <h4>Cart Summary</h4>
          <p>Total Quntity:0</p>
          <p>Total Price:0</p>

    </div>
  )
}

