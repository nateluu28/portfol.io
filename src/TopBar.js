import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export const TopBar = () => {
  return (
    <Navbar bg="light">
      <Navbar.Brand href="#home">Connect with me.</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav.Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/nateluu28"
        >
          <FontAwesomeIcon icon={faGithub} />
        </Nav.Link>
        <Nav className="mr-auto">
          <Nav.Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/nathan-luu/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Nav.Link>
          <Nav.Link href="about">Home</Nav.Link>
          <Nav.Link href="experience">Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
