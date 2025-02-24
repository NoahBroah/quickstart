import React, { useEffect, useState } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import UserLists from "./UserLists";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4001/users")
      .then((resp) => resp.json())
      .then((users) => setUsers(users));
  }, []);

  function deleteOnClick(id) {
    fetch(`http://localhost:4001/users/${id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then(setUsers(users.filter((user) => user.id !== id)));
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
      .then((updatedRate) => {
        setUsers(
          users.map((user) => {
            return user.id === updatedRate.id ? updatedRate : user;
          })
        );
      });
  }

  return (
    <Container>
      <h1>It's <em>Time</em> to look at money differently</h1>
      <Stack direction="horizontal" gap={3}>
          {users.map((user) => (
            <UserLists
              key={user.id}
              user={user}
              deleteBtn={deleteOnClick}
              handleUpdatedRate={handleUpdatedRate}
            />
          ))}
          </Stack>
    </Container>
          
  );
}

export default Users;
