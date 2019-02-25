import React from "react";
import { Link } from "react-router-dom";
import { Button, Nav, Navbar, NavDropdown, Form, FormControl } from 'react-bootstrap';

const Header = () => (
<Navbar bg="light" expand="lg">
  <Navbar.Brand style={links}>App Rick and Morty</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
        <Link style={links} to="/home">Home</Link>
        <Link style={links} to="/List-character">Personajes</Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
);

const links={
  paddingRight: '10px',
  color: 'black'
}

export default Header;
