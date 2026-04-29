import React, { useRef } from 'react'

export default function Input() {
    const secondInputRef=useRef(null)

    const handleInputFocus=()=>{
        secondInputRef.current.focus()
    }
  return (
    <div>
        Hai i am input
        <button  onClick={handleInputFocus}>Click me to focus</button>
        <input  ref={secondInputRef} type="text" name="" id="" />
        <input ref={secondInputRef} type="text" name="" id="" />
        <input  ref={secondInputRef}  type="text" name="" id="" />
    {/* If we use same ref then last element will get focus */}
    </div>
  )
}
