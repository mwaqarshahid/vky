import React from "react";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";

const Container = () => {
  return (
    <main className="main container" role="main" id="main" tabIndex="-1">
      <Home />
      <div id="about">
        <About />
      </div>
      <div className="u-mb2" id="projects">
        <Projects />
      </div>
      <div className="u-mb2" id="contact">
        <Contact />
      </div>
      <div className="u-mb2" id="resume">
        <Resume />
      </div>
    </main>
  );
};

export default Container;
