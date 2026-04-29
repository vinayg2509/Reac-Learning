import React, { useEffect, useState } from "react";

export default function User() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);  // ✅ null is better default than undefined

  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://randomuser.me/api/");  // ✅ fixed URL

        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`); // ✅ handle bad responses

        const data = await res.json();
        setUser(data.results[0]);
      } catch (err) {
        setError(err.message)  // ✅ store actual message, not just true
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, []);

  // ✅ Early returns to guard against null user
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!user) return null

  return (
    <div>
      <p>{user.name.first} {user.name.last}</p>
      <p>{user.gender}</p>
      <p>{user.email}</p>
      <img src={user.picture.medium} alt="User avatar" />
    </div>
  );
}