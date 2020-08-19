import React from "react";
import "./App.css";
import { PreviewProjects } from "./PreviewProjects";
import { TopBar } from "./TopBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <TopBar />
      <h1>Hi, I am Nathan . I am full stack developer and I love what I do.</h1>
      <PreviewProjects />
    </div>
  );
}

export default App;
