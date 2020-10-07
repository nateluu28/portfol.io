import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { PreviewProjects } from "./PreviewProjects";
import { TopBar } from "./TopBar";
import { ProjectCards } from "./ProjectCards";

import About from "./About";
import Experience from "./Experience";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <TopBar />
        <Route path="/home" component={Experience} />
        <Route path="/About" component={About} />
      </Router>

      {/* <PreviewProjects /> */}
      <ProjectCards />
    </div>
  );
}

export default App;
