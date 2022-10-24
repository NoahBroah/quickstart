import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">
              Home
            </Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/users">Users</Nav.Link>
            <Nav.Link href="/transactions">New Transaction</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default NavBar;

{
  /* <Navbar>
    <NavLink to="/" exact>
      Home
    </NavLink>
  <NavLink to="/register" exact>
    Register
  </NavLink>
  <NavLink to="/users" exact>
    Users
  </NavLink>
  <NavLink to="/transactions" exact>
    Transactions
  </NavLink>
</Navbar>; */
}
