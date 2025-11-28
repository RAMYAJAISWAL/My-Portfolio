import { useState } from "react";
import React from 'react';


const Skills=()=> {
  const [activeTab, setActiveTab] = useState("tech");

  const techSkills = [
    { name: "HTML", img: "https://cdn-icons-png.flaticon.com/512/732/732212.png" },
    { name: "CSS", img: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
    { name: "JavaScript", img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
    { name: "React", img: "https://cdn-icons-png.flaticon.com/512/3334/3334886.png" },
    { name: "Tailwind", img: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png" },
    { name: "Node.js", img: "https://cdn-icons-png.flaticon.com/512/919/919825.png" },
  ];

  const softSkills = [
    { name: "Communication", emoji: "🗣️" },
    { name: "Teamwork", emoji: "🤝" },
    { name: "Problem Solving", emoji: "🧠" },
    { name: "Creativity", emoji: "🎨" },
  ];

  return (
    <section

     className="py-16 scroll-mt-10 bg-slate-900 text-white" id="skills">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-10">
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
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">

          {/* Technical Skills */}
          {activeTab === "tech" &&
            techSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-slate-800 p-4 rounded-lg shadow hover:shadow-xl hover:scale-[1.03] transition-all flex flex-col items-center"
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-12 h-12 mb-3"
                />
                <h3 className="text-sm font-semibold text-center">{skill.name}</h3>
              </div>
            ))
          }

          {/* Soft Skills */}
          {activeTab === "soft" &&
            softSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-slate-800 p-4 rounded-lg shadow hover:shadow-xl hover:scale-[1.03] transition-all flex flex-col items-center"
              >
                <div className="text-3xl mb-2">{skill.emoji}</div>
                <h3 className="text-sm font-semibold text-center">{skill.name}</h3>
              </div>
            ))
          }

        </div>
      </div>
    </section>
  );
}

export default Skills;