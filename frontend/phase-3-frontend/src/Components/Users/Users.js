import React, { useEffect, useState } from 'react'
import UserLists from "./UserLists"

function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:4001/users')
        .then(resp => resp.json())
        .then(users => setUsers(users))
    },[])

    function deleteOnClick(id) {
      fetch(`http://localhost:4001/users/${id}`, {
        method: "DELETE"
      })
      .then(resp => resp.json())
      .then(setUsers(users.filter((user) => user.id !==id )))
    }

// PATCH REQUEST

    function handleUpdatedRate(updatedRate, id) {
      fetch(`http://localhost:4001/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedRate),
    })
      .then((resp) => resp.json())
      .then(updatedRate => {
        setUsers(
          users.map(user => {
            return user.id === updatedRate.id ? updatedRate : user
          })
        )
    })
    }

  return (
    <div>
      {users.map((user) => (
        <UserLists key={user.id} user={user} deleteBtn={deleteOnClick} handleUpdatedRate={handleUpdatedRate} />
      ))}
    </div>
  )
}

export default Users


