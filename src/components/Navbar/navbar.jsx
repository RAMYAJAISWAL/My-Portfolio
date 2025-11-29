import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [activeSection,setActiveSection]=useState("");
  const handleMenuItemClick = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  setActiveSection(sectionId);
  setOpen(false);
};
 
  const navItems = [
    { id: "home", label: "Home",path:"/home" },
    { id: "about", label: "About",path:"/about" },
    { id: "skills", label: "Skills",path:"/skills" },
    { id: "project", label: "Project",path:"/project" },
    { id: "contact", label: "Contact" ,path:"/contact"},
  ];

  return (
    <nav className="bg-slate-800  w-full py-4 shadow-md fixed z=[999] top-0 left-0  ">
      <div className="max-w-7xl mx-auto flex items-center px-6 justify-between">

        {/* LEFT SIDE — LOGO */}
        <h1 className="text-3xl font-serif italic ml-20 text-white tracking-widest">
          RJ
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex space-x-8 text-white text-lg">
          {navItems.map((navItem) => (
            <li key={navItem.id} className={`hover:text-blue-400 transition 
              ${activeSection===navItem.id?"text-white ":""

            }`
            
            }>
              <button onClick={()=> handleMenuItemClick(navItem.id)}>
                {navItem.label}
              </button>
            </li>
          ))}
        </ul>

        {/* RESUME BUTTON (DESKTOP) */}
        <div className="hidden md:flex">
          <a
            href="/resume.pdf"
            className="bg-blue-600 text-white px-4 py-2 mr-15 rounded-lg hover:bg-blue-500 transition shadow"
          >
            Resume
          </a>
        </div>

        {/* MOBILE HAMBURGER ICON */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div
        className={`md:hidden bg-slate-700 text-white px-6 overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col space-y-4 text-lg">
          {navItems.map((navItem) => (
            <li key={navItem.id} className="hover:text-blue-400 transition">
              <button onClick={()=> handleMenuItemClick(navItem.id)}>
              {navItem.label}</button>
            </li>
          ))}

          {/* Resume in Mobile */}
          <a
            href="/resume.pdf"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-500 transition shadow"
          >
            Resume
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
