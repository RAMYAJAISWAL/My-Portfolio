import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built using React and Tailwind CSS.",
    image: "/portfolio-img.png",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/RAMYAJAISWAL/My-Portfolio",
  },
];

const Projects = () => {
  return (
    <section
      id="project"
      className="min-h-screen px-8 bg-slate-900 text-white py-20"
    >
      {/* HEADING */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.3 }}
        className="text-4xl font-bold text-center mb-14"
      >
        Projects
      </motion.h1>

      {/* PROJECT GRID */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ amount: 0.2 }}
            whileHover={{ scale: 1.03 }}
            className="bg-slate-800 rounded-xl overflow-hidden shadow-lg"
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
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-block px-4 py-2 text-sm bg-blue-600 rounded hover:bg-blue-700 transition"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
