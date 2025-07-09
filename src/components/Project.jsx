import React from "react";
import { PROJECTS } from "../constants/index";

const Projects = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-28 py-12 md:py-20 px-4 md:px-8 flex justify-center items-center min-h-screen"
      data-aos="fade-up"
    >
      <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-6 md:p-10 shadow-lg w-full max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-10 text-white">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="bg-neutral-800 rounded-lg p-4 sm:p-6 shadow-lg flex flex-col h-full"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 sm:h-48 object-cover rounded mb-4"
              />
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-white">
                {project.title}
              </h3>
              <p className="text-neutral-300 mb-3 text-sm sm:text-base flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-fuchsia-500 text-xs sm:text-sm px-2 py-1 rounded"
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