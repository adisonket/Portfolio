import React from "react";
import { PROJECTS } from "../constants/index";

const Projects = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-28 py-20 px-8 flex justify-center items-center min-h-screen"
      data-aos="fade-up"
    >
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg max-w-6xl w-full">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-white">
          Projects
        </h2>
        <div className="grid gap-10 md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="bg-neutral-800 rounded-lg p-6 shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2 text-white">
                {project.title}
              </h3>
              <p className="text-neutral-300 mb-3">
                {project.description}
              </p>
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
      </div>
    </section>
  );
};

export default Projects;
