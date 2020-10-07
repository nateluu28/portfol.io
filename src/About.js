import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faJava,
  faJsSquare,
  faReact,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";

function About() {
  return (
    <div>
      <h1>
        Hi, I'm Nathan Luu. I have a passion for coding! I am a full-stack
        developer with experience in Python, Javascript, and Java.
      </h1>
      <h2>Expert: </h2>
      <FontAwesomeIcon icon={faPython} size="6x" />
      <FontAwesomeIcon icon={faJava} size="6x" />
      <FontAwesomeIcon icon={faJsSquare} size="6x" />
      <FontAwesomeIcon icon={faReact} size="6x" />
      <FontAwesomeIcon icon={faGitAlt} size="6x" />
    </div>
  );
}

export default About;
