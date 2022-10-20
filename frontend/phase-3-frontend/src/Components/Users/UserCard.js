import React, { useEffect, useState } from 'react'

function UserCard({ user, userId }) {
   const [userData, setUserData] = useState(null)

   useEffect(() => {
    fetch(`http://localhost:4001/users/${user.id}`)
    .then((resp) => resp.json())
    .then((user) => setUserData(user))
   },[userId])

   if (!userData) return <h2>Loading user data...</h2>

  return (
    <div>
        <h2>{user.username}</h2>
        <h5>{user.email}</h5>
        {user.transactions.map((transaction) => (
          <div>
            <h5>{transaction.name}</h5>
            <h5>{transaction.amount}</h5>
          </div>
        ))}
    </div>
  )
}

export default UserCard;

