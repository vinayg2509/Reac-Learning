import React from 'react'

export default function Welcome({name="Tom",message="How are you?"}) {
  return (
    <div>
        <h1>Welcome</h1>
        
        <h3>{name} , {message}</h3>
    </div>
  )
}
