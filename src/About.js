import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPython,
  faJava,
  faJsSquare,
  faReact,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const renderTooltip = (props) => (
  <Tooltip {...props}>Tooltip for the register button</Tooltip>
);

function About() {
  return (
    <div>
      <h1>
        Hi, I'm Nathan Luu. I have a passion for coding! I am a full-stack
        developer with experience in Python, Javascript, and Java.
      </h1>
      <div className="icons">
        <h2>
          Expert:
          <OverlayTrigger placement="top" overlay={renderTooltip}>
            <FontAwesomeIcon icon={faPython} size="lg" />
          </OverlayTrigger>
          <FontAwesomeIcon icon={faJava} size="lg" />
          <FontAwesomeIcon icon={faJsSquare} size="lg" />
          <FontAwesomeIcon icon={faReact} size="lg" />
          <FontAwesomeIcon icon={faGitAlt} size="lg" />
        </h2>
      </div>
    </div>
  );
}

export default About;
