import React from 'react'

export default function CustomButton() {

    const handleClick=()=>{
        alert("Thank you for liking")
    }
  return (
    <div>
        <button onClick={handleClick}>Like</button>

    </div>
  )
}
