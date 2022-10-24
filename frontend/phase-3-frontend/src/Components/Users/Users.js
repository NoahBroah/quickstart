import React, { useEffect, useState } from 'react'
import UserLists from "./UserLists"

function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:4001/users')
        .then(resp => resp.json())
        .then(users => setUsers(users))
    },[])

  return (
    <div>
      {users.map((user) => (
        <UserLists key={user.id} user={user} setUsers={setUsers} users={users} />
      ))}
    </div>
  )
}

export default Users


