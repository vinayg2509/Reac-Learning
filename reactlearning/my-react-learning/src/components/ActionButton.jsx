import React from 'react'

export default function ActionButton({text,onClick}) {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  )
}
