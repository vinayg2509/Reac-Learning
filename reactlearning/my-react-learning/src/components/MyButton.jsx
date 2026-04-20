import React from 'react'

export default function MyButton({text}) {
    const name="Vinay"

    const handleClick=()=>
    {
        alert(`Hey ${name} you clicked ${text}`)
    }
  return (
    <div>
        <button onClick={handleClick}>{text}</button>
    </div>
  )
}
