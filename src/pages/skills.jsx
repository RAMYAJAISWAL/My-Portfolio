import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("tech");

  const techSkills = [
    { name: "HTML", img: "https://cdn-icons-png.flaticon.com/512/732/732212.png" },
    { name: "CSS", img: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
    { name: "JavaScript", img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
    { name: "React", img: "https://cdn-icons-png.flaticon.com/512/3334/3334886.png" },
    { name: "C++", img: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png" },
    { name: "Express.js", img: "https://cdn-icons-png.flaticon.com/512/919/919825.png" },
    { name: "Tailwind", img: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png" },
    { name: "Node.js", img: "https://cdn-icons-png.flaticon.com/512/919/919825.png" },
    { name: "GitHub", img: "https://cdn-icons-png.flaticon.com/512/733/733609.png" },
    {name: "MongoDB",  img: "https://cdn-icons-png.flaticon.com/512/919/919836.png"}

  ];

  const softSkills = [
    { name: "Communication", emoji: "🗣️" },
    { name: "Teamwork", emoji: "🤝" },
    { name: "Creative Writing", emoji: "🖊️" },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="skills"
      className="py-16 scroll-mt-10 bg-slate-900 text-white"
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.3 }}
          className="text-3xl font-bold mb-10 text-center"
        >
          Skills
        </motion.h2>

        {/* TABS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0.3 }}
          className="flex justify-center gap-6 mb-10"
        >
          <button
            onClick={() => setActiveTab("tech")}
            className={`px-6 py-2 rounded-full text-lg font-semibold transition 
            ${activeTab === "tech" ? "bg-blue-600" : "bg-slate-700 hover:bg-slate-600"}`}
          >
            Technical Skills
          </button>

          <button
            onClick={() => setActiveTab("soft")}
            className={`px-6 py-2 rounded-full text-lg font-semibold transition 
            ${activeTab === "soft" ? "bg-blue-600" : "bg-slate-700 hover:bg-slate-600"}`}
          >
            Soft Skills
          </button>
        </motion.div>

        {/* CARDS */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={container}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5"
          >
            {(activeTab === "tech" ? techSkills : softSkills).map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={item}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-800 p-4 rounded-lg shadow flex flex-col items-center"
              >
                {activeTab === "tech" ? (
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="w-12 h-12 mb-3"
                  />
                ) : (
                  <div className="text-3xl mb-2">{skill.emoji}</div>
                )}

                <h3 className="text-sm font-semibold text-center">
                  {skill.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Skills;
