import React from "react";
import { Navbar, NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar>
      <NavItem>
        <NavLink to="/" exact>
          Home
        </NavLink>
      </NavItem>
      <NavLink to="/register" exact>
        Register
      </NavLink>
      <NavLink to="/login" exact>
        Login
      </NavLink>
      <NavLink to="/users" exact>
        Users
      </NavLink>
      <NavLink to="/transactions" exact>
        Transactions
      </NavLink>
    </Navbar>
  );
}

export default NavBar;
