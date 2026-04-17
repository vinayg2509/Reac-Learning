import React from 'react'

export default function CardWrapper({title,children}) {
  return (
    <div>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  )
}
