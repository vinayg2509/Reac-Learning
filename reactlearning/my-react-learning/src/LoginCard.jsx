import React from "react";
import { useState } from "react";

export default function LoginCard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState(" ");

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const handelMessage = (event) => {
    setMessage(event.target.value);
  };
  return (
    <>
      <div>
        <button onClick={handleLogin}>{isLoggedIn ? "Logout" : "Login"}</button>
      </div>
      <div>
        <input
          type="text"
          onChange={handelMessage}
          value={message}
          placeholder="Type a message"
        />
      <p>{message}</p>


      </div>
     
    </>
  );
}
