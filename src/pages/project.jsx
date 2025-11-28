
import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built using React and Tailwind CSS.",
    image: "https://via.placeholder.com/400x250",
    tech: ["React", "Tailwind", "JavaScript"],
    live: "#",
    github: "#",
  },
  {
    title: "Student Management System",
    description:
      "A web app to manage students, courses, and results.",
    image: "https://via.placeholder.com/400x250",
    tech: ["React", "Node.js", "MongoDB"],
    live: "#",
    github: "#",
  },
  {
    title: "Weather App",
    description:
      "Weather forecasting app using public API.",
    image: "https://via.placeholder.com/400x250",
    tech: ["React", "API", "CSS"],
    live: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
     <section
      id="project"   
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 bg-slate-900"
    >
    <div className="bg-slate-900 text-white min-h-screen py-12 px-5">
      <h1 className="text-4xl font-bold text-center mb-10">Projects</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2">
                {project.title}
              </h2>

              <p className="text-gray-300 text-sm mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-slate-700 text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded text-sm"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-gray-400 px-4 py-2 rounded text-sm hover:bg-slate-700"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
  
};

export default Projects;
