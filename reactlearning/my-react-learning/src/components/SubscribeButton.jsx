import React from 'react'
import ActionButton from './ActionButton'

export default function SubscribeButton() {
    const subscribeUs=()=>{
        alert("Thank You for Subscribing")
    }
  return (
    <div>
        <h2>Subscribe </h2>
      <ActionButton onClick={subscribeUs} text="Subscribe"/>
    </div>
  )
}
