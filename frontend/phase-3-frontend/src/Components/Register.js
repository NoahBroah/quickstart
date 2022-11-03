import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row } from "react-bootstrap";

const initialForm = {
  username: "",
  email: "",
  password: "",
  hourly_rate: "",
};

function Register() {
  const [formData, setFormData] = useState(initialForm);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert('A new user has been created!')
    const newUser = { ...formData };

    fetch("http://localhost:4001/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    }).then(setFormData(initialForm));
  }

  return (
    <Container>
      <h2>
        Register an Account
      </h2>
      <Row>
        <Form onSubmit={handleSubmit}>
          <Form.Label>Please fill out the information below to create a new account</Form.Label>

          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              name="username"
              type="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
            </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Hourly Rate</Form.Label>
            <Form.Control
              name="hourly_rate"
              type="hourly_rate"
              placeholder="Hourly Rate"
              value={formData.hourly_rate}
              onChange={handleChange}
            />
            </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Row>
    </Container>
  );
}

export default Register;
