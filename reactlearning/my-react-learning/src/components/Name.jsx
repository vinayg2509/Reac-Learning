import React from 'react'

export default function Name() {

    const names=["Tom","Jerry","Mickey","Jhon"]

    const name =names.map((name,index)=>{
       return <h3>{index} {name}</h3>
    })

  return (
    <div key={name.index}>
            <h3>{name}</h3>
    </div>
  )
}
