import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const educationData = [
    {
      degree: "BTech in Computer Science & Engineering",
      institution: "Techno Main Saltlake",
      year: "2024 - 2028",
    },
    {
      degree: "Higher Secondary (12th)",
      institution: "Rajasthan Vidya Mandir",
      year: "2023",
    },
    {
      degree: "Secondary School (10th)",
      institution: "Rajasthan Vidya Mandir",
      year: "2021",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-6 md:px-20 bg-slate-900 text-white"
    >
      {/* ABOUT HEADING */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.3 }}
        className="text-4xl font-bold text-center mt-10 mb-20"
      >
        About Me
      </motion.h2>

      {/* ABOUT CONTENT */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-20">
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.3 }}
          className="flex justify-center md:justify-start"
        >
          <img
            src="/aboutt-pic.jpg"
            alt="Profile"
            className="w-72 h-72 object-cover rounded-3xl shadow-lg"
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.3 }}
        >
          <p className="text-gray-300 leading-relaxed">
            I'm{" "}
            <span className="font-semibold text-blue-400">
              Ramya
            </span>
            , an aspiring full-stack web developer who enjoys creating simple,
            meaningful, and user-friendly projects. I love learning
            new technologies, experimenting with ideas, and improving
            my skills every day.
          </p>
        </motion.div>
      </div>

     {/* TITLE */}
<motion.h2
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ amount: 0.3 }}
  className="text-4xl font-bold text-center mb-14"
>
  Education
</motion.h2>

{/* TIMELINE */}
<div className="relative max-w-5xl mx-auto">

  {/* VERTICAL LINE (MOBILE + DESKTOP) */}
  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-[2px] bg-gray-600"></div>

  {educationData.map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ amount: 0.3 }}
      className={`mb-10 flex ${
        index % 2 === 0
          ? "md:justify-end"
          : "md:justify-start"
      }`}
    >

      {/* CARD */}
      <div className="w-full md:w-1/2 pl-10 md:px-6">
        <div className="bg-slate-800 p-4 rounded-lg shadow-md max-w-md
                        hover:scale-[1.03] transition-transform duration-300">
          <h4 className="text-lg font-semibold">{item.degree}</h4>

          <h5 className="text-gray-300 text-sm mt-1">
            {item.institution}
          </h5>

          <span className="text-xs text-teal-400 font-medium block mt-1">
            {item.year}
          </span>
        </div>
      </div>

      {/* DOT (ALWAYS VISIBLE) */}
      <span className="absolute left-4 md:left-1/2 w-3.5 h-3.5 
                       bg-teal-400 rounded-full
                       transform -translate-x-1/2 mt-6">
      </span>

    </motion.div>
  ))}
</div>

    </section>
  );
};

export default About;
