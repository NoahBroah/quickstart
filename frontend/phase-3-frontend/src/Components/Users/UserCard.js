import React, { useEffect, useState } from 'react'

function UserCard({ userId }) {
    const [singleUser, setSingleUser] = useState(null)
    useEffect(() => {
        fetch(`http://localhost:4001/users/${userId}`)
        .then(resp => resp.json())
        .then(user => setSingleUser(user))
    },[userId])

    if (!singleUser) return <h2>Loading User data...</h2>

  return (
    <div>
        <h1>{singleUser.username}</h1>
        <h3>{singleUser.transactions.map((transaction) => (
            <div>
                <h5>Username: {transaction.name}</h5>
                <h5>Amount: ${transaction.amount}.00</h5>
                <h5>Category: {transaction.category}</h5>
            </div>
        ))}</h3>
    </div>
  )
}

export default UserCard
