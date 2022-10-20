import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Users from "./Users/Users";

const initialForm = {
  username: "",
  password: "",
};

function Login() {
  const [userLogin, setUserLogin] = useState(initialForm);
  const [currentUser, setCurrentUser] = useState(null);

  function handleChange(e) {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const logedInUser = { ...userLogin };

    fetch(`http://localhost:4001/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(logedInUser),
    })
      .then(console.log(logedInUser))
      .then((resp) => resp.json())
      .then((user) => setCurrentUser(user));
  }

  return (
    <div>
      {currentUser ? (
        <Users userId={currentUser.id} />
      ) : (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              name="username"
              type="username"
              placeholder="Username"
              value={userLogin.username}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              value={userLogin.password}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </div>
  );
}

export default Login;
