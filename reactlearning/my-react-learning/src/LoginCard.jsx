import React from 'react'
import { useState } from 'react'



export default function LoginCard() {

      const[isLoggedIn,setIsLoggedIn]=useState(false)

      const handleLogin=()=>
      {
        setIsLoggedIn(!isLoggedIn)
      }

  return (
    <div>
      <button onClick={handleLogin}>{isLoggedIn?"Logout":"Login"}</button>
    </div>
  )
}
