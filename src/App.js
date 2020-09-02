import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { PreviewProjects } from "./PreviewProjects";
import { TopBar } from "./TopBar";
// import { Link, Switch, Route, Router } from "react-router";
import { ProjectCards } from "./ProjectCards";

function App() {
  return (
    <div className="App">
      {/* <Router> */}
      <TopBar />
      <h1>Hi, I am Nathan . I am full stack developer and I love what I do.</h1>
      <PreviewProjects />
      <ProjectCards />
      {/* </Router> */}
    </div>
  );
}

export default App;
