import React from 'react'
import MenuItems from './MenuItems'

export default function Menu() {

    const handelOrder=(name, price)=>{
        alert(`You have ordered ${name} and Rs.${price}`)
    }
  return (
    <div>
        <h2>Our Menu</h2>
        <MenuItems onOrder={handelOrder}name="Pizza🍕" price={234}/>
        <MenuItems onOrder={handelOrder}name="Burger 🍔" price={234}/>
        <MenuItems onOrder={handelOrder}name="Cake 🎂" price={234}/>

    </div>
  )
}
