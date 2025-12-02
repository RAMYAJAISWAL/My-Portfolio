import React from 'react'

const Home = () => {
  return (
    <section
      id="home"   // <-- now navbar can scroll to home
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 bg-slate-900"
    >

      {/* LEFT — PHOTO */}
      <div className="flex justify-center md:w-1/2 mb-10 md:mb-0">
        <img
          src="/home-pic.jpg"
          alt="profile"
          className="w-60 h-60 md:w-72 md:h-72 rounded-full object-cover shadow-xl border-4 border-blue-500"
        />
      </div>

      {/* RIGHT — TEXT */}
      <div className="md:w-1/2 text-center md:text-left text-white space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          Hi, I am <span className="text-blue-400">Ramya Jaiswal</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300">
          Currently learning full-stack development and building projects along the way.
        </p>

        
      </div>

    </section>
  );
};

export default Home;


