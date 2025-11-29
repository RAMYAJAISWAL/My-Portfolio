import React from 'react'
const About=()=>{
  const educationData = [
  {
    degree: "Bachelor of Technology",
    institution: "ABC Engineering College",
    year: "2021 - 2025",
    description: "Computer Science & Engineering",
  },
  {
    degree: "Higher Secondary (12th)",
    institution: "XYZ Junior College",
    year: "2019 - 2021",
    description: "Science Stream",
  },
  {
    degree: "Secondary School (10th)",
    institution: "LMN High School",
    year: "2018 - 2019",
    description: "General Studies",
  },

  ];
   return (
    
   <section id="about" class="py-20 px-6 md:px-20 bg-slate-900 text-white">
    <h2 class="text-4xl font-bold text-center mb-25">
    About Me
  </h2>
  <div class="max-w-6xl mx-auto grid md:grid-cols-2  gap-12 items-center">

    
    <div class="flex justify-center md:justify-start">
      <img 
        src="about-pic.jpg"
        alt="Profile Photo"
        class="w-72 h-72 object-cover rounded-3xl shadow-lg"
      />
    </div>
   
    <div>
      

      <p class="text-gray-300 leading-relaxed mb-6">
        Hi, I'm <span class="font-semibold text-blue-400">Your Name</span>.
        I'm passionate about web development and love creating responsive,
        clean, and modern designs. I enjoy learning new technologies and
        transforming ideas into real projects.I'm passionate about web development and love creating responsive,
        clean, and modern designs. I enjoy learning new technologies and
        transforming ideas into real projec
      </p>

      
    </div>

  </div>
  
      <h2 className="text-4xl font-bold text-center  mt-20 mb-12">Education</h2>

      <div className="relative z=0 max-w-4xl mx-auto ">
        {/* Center line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 z=0 h-full border-l-2 border-gray-600 hidden md:block"></div>

        {educationData.map((item, index) => (
          <div
            key={index}
            className={`mb-10 flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:justify-end " : "md:justify-start"
            }`}
          >
            {/* Card */}
            <div className="md:w-1/2 px-4">
              <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-gray-700">
                <h3 className="text-xl font-semibold">{item.degree}</h3>
                <p className="text-indigo-400">{item.institution}</p>
                <p className="text-sm text-gray-400">{item.year}</p>
                <p className="mt-2 text-gray-300">{item.description}</p>
              </div>
            </div>

            {/* Dot */}
            <div className="hidden md:flex items-center justify-center w-0">
              <span className="w-4 h-4 bg-indigo-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></span>
            </div>
          </div>
        ))}
      </div>
   
</section>

   
   )
}
export default About;