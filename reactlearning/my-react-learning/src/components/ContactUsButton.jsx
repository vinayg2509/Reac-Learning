import React from 'react'
import ActionButton from './ActionButton'

export default function ContactUsButton() {

    const sendMessage=()=>{
        alert("Sending message")
    }
  return (
    <div>
        <h2>Send Message</h2>
        <ActionButton onClick={sendMessage}text="Send Message"/>
    </div>
  )
}
