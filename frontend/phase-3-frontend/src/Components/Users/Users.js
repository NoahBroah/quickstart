import React from 'react'
import UserCard from './UserCard'

function Users({ userData }) {
    
    const userCards = userData.map((user) => {
        return <UserCard key={user.id} user={user} />
    })

  return (
    <div>
        {userCards}
    </div>
  )
}

export default Users