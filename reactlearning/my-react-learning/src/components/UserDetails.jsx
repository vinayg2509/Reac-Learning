import React from 'react'

export default function UserDetails({ name, isOnline, hideOffLine }) {
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

// !Using ternary operator

            return(

                <div>
                    <h3>{name}</h3>
                    <small>{isOnline ?"Online":"Offline"}</small>
                    <p>{isOnline?"Is Avaliable for chat":"Not Avaliable"}</p>

                    {isOnline ?(
                        <button>Send Message</button>
                    )
                    :(
                        <small>Check Later</small>
                    )}
                </div>
            )
}