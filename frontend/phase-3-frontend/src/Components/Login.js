import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const initialForm = {
  username: "",
  password: "",
};

function Login({}) {
  const [userLogin, setUserLogin] = useState(initialForm);
  // let history = useHistory();

  function handleChange(e) {
    console.log(e.target.value);
    setUserLogin({...userLogin,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // findCurrentUser(userLogin);

    const currentUser = { ...userLogin };

    fetch(`http://localhost:4001/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(currentUser),
    })
      .then(console.log(currentUser))
      .then((resp) => resp.json())
      .then((user) => console.log(user));

    // async function findCurrentUser(username) {
    //   const response = await fetch(`http://localhost:4001/users/${username}`)
    //   const user = await response.json()
    //   changeUser(user)
    //   history.push(`/users/${user.id}/transactions`)
    // }
  }

  return (
    <div>
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
    </div>
  );
}

export default Login;
