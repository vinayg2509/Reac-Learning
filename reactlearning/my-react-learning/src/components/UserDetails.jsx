import React from 'react'

export default function UserDetails({ name, isOnline, hideOffLine }) {
  if (hideOffLine && !isOnline) return null;

  if (isOnline) {
    return (
      <>
        <h3>{name}</h3>
        <small>Is Available</small>
        <button>Send Message</button>
      </>
    );
  }

  return (
    <>
      <h3>{name}</h3>
      <small>Not Available</small>
      <p>Check Later</p>
    </>
  );
}