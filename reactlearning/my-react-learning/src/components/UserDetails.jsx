import React from 'react'

export default function UserDetails({ name, isOnline, hideOffLine ,isPremium,isNewUser ,role}) {
//   if (hideOffLine && !isOnline) return null;

//   if (isOnline) {
//     return (
//       <>
//         <h3>{name}</h3>
//         <small>Is Available</small>
//         <button>Send Message</button>
//       </>
//     );
//   }

//   return (
//     <>
//       <h3>{name}</h3>
//       <small>Not Available</small>
//       <p>Check Later</p>
//     </>
//   );

// !Using ternary operator and && operator
                    let roleBadge=null
                     if(role==='admin')
                     {
                        roleBadge='admin'

                     }
                     else if(role ==='user')
                     {
                        roleBadge='user'
                     }
            return(

               
                
                <div>
                    
                    <h3>{name}</h3>
                    <small>{isOnline ?"Online":"Offline"}</small>
                    <p>{isOnline?"Is Avaliable for chat":"Not Avaliable"}</p>
                    <p>{isPremium && <span>💎 Premium User</span>}</p>
                    <p>{isNewUser&& <span>🥳 New User</span>}</p>
                    <p>{roleBadge}</p>

                    {isOnline ?(
                        <button>Send Message</button>
                    )
                    :(
                        <small>Check Later</small>
                    )}
                </div>
            )




}