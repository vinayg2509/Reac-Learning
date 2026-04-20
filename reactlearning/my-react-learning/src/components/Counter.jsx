import React from 'react'
import { useState } from 'react'

export default function Counter() {


    const [count , setCount]=useState(0)

    const handleClick=()=>{

        setCount(count+1)
    }

  return (
    <div>
        <button onClick={handleClick}>+</button>
        <span>Count:{count}</span>
    </div>
  )
}
