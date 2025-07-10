import React from 'react';
import { PROJECTS } from '../constants/index.js';

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-28 py-16 container mx-auto px-4" data-aos="fade-up">
      <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl p-8 md:p-12 shadow-xl max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="bg-neutral-800 rounded-lg p-6 shadow-lg flex flex-col h-full hover:scale-[1.02] transition-transform"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full max-h-48 object-contain rounded mb-4"
              />
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-white">
                {project.title}
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base mb-4 flex-grow">
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
