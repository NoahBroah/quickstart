import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row } from "react-bootstrap";

const initialForm = {
  name: "",
  amount: "",
  category: "",
  user_id: "",
};

function NewTransaction() {
  const [formData, setFormData] = useState(initialForm);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTransaction = { ...formData };

    fetch(`http://localhost:4001/transactions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTransaction),
    }).then(setFormData(initialForm));
  }

  return (
    <Container>
      <h2>
        Fill out the information below to associate transactions with your
        account
      </h2>
      <Row>
        <Form onSubmit={handleSubmit}>
          <Form.Label>Please fill out the information below to create an account</Form.Label>

          <Form.Group className="mb-3">
            <Form.Label>Merchant Name</Form.Label>
            <Form.Control
              name="name"
              type="name"
              placeholder="Merchant Name"
              value={formData.name}
              onChange={handleChange}
            />
            </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              name="amount"
              type="amount"
              placeholder="Enter Amount"
              value={formData.amount}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Control
              name="category"
              type="category"
              placeholder="Category"
              value={formData.category}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>User Id</Form.Label>
            <Form.Control
              name="user_id"
              type="user_id"
              placeholder="ID of associated user"
              value={formData.user_id}
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

export default NewTransaction;
