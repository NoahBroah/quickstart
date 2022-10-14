import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setFormData(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    
    fetch("http://localhost:9292/users")
    .then(resp => resp.json())
    .then(data => console.log(data))
  }

  return (
    <Container>
      <Row>
        <Form onSubmit={handleSubmit}>
            <Form.Label>Name</Form.Label>
          <Row>
            <Col>
              <Form.Control name="first_name" placeholder="First name" value={formData.first_name} onChange={handleChange} />
            </Col>
            <Col>
              <Form.Control name="last_name" placeholder="Last name" value={formData.last_name} onChange={handleChange}/>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" value={formData.email} onChange={handleChange}/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Row>
    </Container>
  );
}

export default Login;
