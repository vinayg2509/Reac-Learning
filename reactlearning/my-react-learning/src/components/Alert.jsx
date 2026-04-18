import React from 'react'
import  style from './alert.module.css'

export default function Alert({children,type="success"}) {
  return (
    <div>
       {/* <div style={{ 
             backgroundColor:type==="success"? "#10B981":"#ef4444", color: "white", padding: "16px",borderRadius:"5%" }}>
        {children}
        </div> */}

<div className={`${style.alert} ${style[type]}`}>
  {children}
</div>
    </div>
  )
}
