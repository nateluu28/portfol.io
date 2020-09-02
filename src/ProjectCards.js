import React from "react";
import Card from "react-bootstrap/Card";

export const ProjectCards = () => {
  return (
    // Make this with passable arguments for each project
    <Card style={{ width: "18rem" }} bg="dark">
      <Card.Body>
        <Card.Title>Project Title One</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Project Subtitle with languages used
        </Card.Subtitle>
        <Card.Text>Summary of the projects at hand.</Card.Text>
        <Card.Link href="#">Source Code</Card.Link>
      </Card.Body>
    </Card>
  );
};
