import React from "react";
import { projectsList } from "../data/projects";

const Projects = () => {
  return (
    <div className="projects">
      <ul className="projects__list">
        {projectsList.map((project) => (
          <li className="projects__item" key={project.name}>
            <div
              className="project"
              style={{ backgroundColor: project.backgroundColor }}
            >
              <picture>
                <img
                  src={project.image}
                  alt={`${project.name} logo`}
                  width="500"
                  height="500"
                  className="project__image"
                />
              </picture>
              <div className="project__inner">
                <a
                  href={project.link}
                  className="project__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="project__title">{project.name}</span>
                </a>
                <p className="project__description">{project.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
