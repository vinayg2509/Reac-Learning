import { useState } from "react";

export default function UserProfile() {
  const [user, setUser] = useState({
    name: "Vinay",
    age: 24,
    email: "gvinay@gmail.com",
    address:{
        city:"Shivamogga",
        country:"India"
    }
  });

  const changeName=()=>{
    setUser({
        ...user,
        name:"Vinay G"

    })
  }
  const updateAge=()=>{
    setUser({
        ...user,
        age:user.age+1
    })
  }
  const updateCity=()=>{
    setUser({...user,
        address:{
            ...user.address,
            city:"Bangalore"
        }}
        
    )
  }
  return (
    <div>
      <h2>User Details</h2>

      <p>{user.name}</p>
      <p>{user.age}</p>
      <p>{user.email}</p>
      <p>{user.address.city}</p>
      <p>{user.address.country}</p>


      <button onClick={changeName}>Change Name</button>
      <button onClick={updateAge}>Update Age</button>

      <button onClick={updateCity}>Update City</button>

    </div>
  );
}
