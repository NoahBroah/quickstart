import React, {useEffect, useState} from 'react'
import UserCard from './UserCard'

function Users({userId}) {
const [userData, setUserData] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:4001/users/${userId}/transactions`)
    .then(resp => resp.json())
    .then(user => setUserData(user))
},[])
    
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