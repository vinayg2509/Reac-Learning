import React from 'react'

export default function MenuItems({name,price,onOrder}) {

   
  return (
    <div>
            <span>{name}--Rs.{price}</span>
            <button onClick={()=>onOrder(name,price)}>Order Here</button>
    </div>
  )
}
