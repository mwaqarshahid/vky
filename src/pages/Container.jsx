import React from "react";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";

const Container = () => {
  return (
    <main className="main container" role="main" id="main" tabIndex="-1">
      <Home />
      <div id="about">
        <About />
      </div>
      <div className="u-mb2" id="projects">
        <h2>Projects</h2>
        <Projects />
      </div>
      <div className="u-mb2" id="resume">
        <h2>Waqar's Resume</h2>
        <Resume />
      </div>
    </main>
  );
};

export default Container;
