import React from 'react'

function UserCard({ user }) {
    const { first_name, last_name, email } = user
  return (
    <div>
        <h2>{first_name}</h2>
        <h2>{last_name}</h2>
        <h5>{email}</h5>
    </div>
  )
}

export default UserCard;