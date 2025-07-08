import React from "react";
import { PROJECTS } from "../constants/index";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-8 text-white max-w-6xl mx-auto"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-10">Projects</h2>
      <div className="grid gap-10 md:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <div key={index} className="bg-neutral-800 rounded-lg p-6 shadow-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-neutral-300 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-fuchsia-500 text-sm px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
