import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export const TopBar = () => {
  return (
    <Navbar bg="light">
      <Navbar.Brand href="#home">Nathan Luu</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="about">Home</Nav.Link>
          <Nav.Link href="experience">Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
