import React from 'react'
import UserInfo from './UserInfo';

export default function UserCard({name,...rest}) {
  return (
    <div>
            <h3>{name}</h3>
            <UserInfo{...rest}/>
    </div>
  )
}
