import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Col, Container, Row } from "react-bootstrap";
import UserCard from "./UserCard";
// import UpdateUser from "./UpdateUser";

function UserLists({ user, deleteBtn, handleUpdatedRate }) {
  const { username, hourly_rate, email, id } = user;
  const [singleUser, setSingleUser] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [newRate, setNewRate] = useState({
    hourly_rate: hourly_rate,
  });

  function handleClick() {
    setSingleUser(!singleUser);
  }

  function deleteUser() {
    deleteBtn(user.id);
  }
  // PATCH REQUEST

  function updateUser() {
    setShowForm(!showForm);
  }
  function handleChange(e) {
    setNewRate({ ...newRate, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();

    const updatedRate = { ...newRate };
    handleUpdatedRate(updatedRate, user.id);

    setShowForm(!showForm);
  }
  return (
    <div>
      {singleUser ? (
        <Card style={{ width: "18rem" }} className="card">
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{username}</Card.Title>
            <Card.Text>{email}</Card.Text>
            <Card.Text>
              This user makes an hourly rate of ${hourly_rate}. Using this
              information we can view their transactions and see how much of
              their time is spent on different categories.
            </Card.Text>
            <Button variant="primary" onClick={handleClick}>
              View Users Transactions
            </Button>
            <Button variant="primary" onClick={deleteUser}>
              Delete This User
            </Button>
            <Button variant="primary" onClick={updateUser}>
              Update Users Rate
            </Button>
            {showForm ? (
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label> Hourly Rate</Form.Label>
                  <Form.Control
                    name="hourly_rate"
                    placeholder="Enter a new Hourly Rate"
                    value={newRate.hourly_rate}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Update
                </Button>
              </Form>
            ) : null}
          </Card.Body>
        </Card>
      ) : (
        <>
          <UserCard userId={id} rate={hourly_rate} />
          <Button variant="primary" onClick={handleClick}>
            Hide Users Transactions
          </Button>
        </>
      )}
    </div>
  );
}

export default UserLists;


