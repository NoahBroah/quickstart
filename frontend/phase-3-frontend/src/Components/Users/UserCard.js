import React from 'react'

function UserCard({ user }) {
    const { username, transactions, email } = user
  return (
    <div>
        <h2>{username}</h2>
        <h2>{transactions}</h2>
        <h5>{email}</h5>
    </div>
  )
}

export default UserCard;