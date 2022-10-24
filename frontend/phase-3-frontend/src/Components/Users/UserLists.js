import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import UserCard from "./UserCard";

function UserLists({ user, users, setUsers }) {
  const [singleUser, setSingleUser] = useState(true);

  function deleteOnClick(id) {
    fetch(`http://localhost:4001/users/${user.id}`, {
      method: "DELETE"
    })
    .then(resp => resp.json())
    .then(setUsers(users.filter((user) => user.id !==id )))
  }

  function handleClick() {
    setSingleUser(!singleUser);
  }

  return (
    <div>
      {singleUser ? (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{user.username}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary" onClick={handleClick}>
              View Users Transactions
            </Button>
            <Button variant="primary" onClick={deleteOnClick}>
              Delete This User
            </Button>
          </Card.Body>
        </Card>
      ) : (
        <UserCard userId={user.id} />
      )}
    </div>
  );
}

export default UserLists;
