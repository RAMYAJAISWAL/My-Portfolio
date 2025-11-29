import React from'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Nav from './components/Navbar/navbar';

import Home from './pages/home';
import Main from './components/Main/mainn';
import About from "./pages/about";
import Skills from "./pages/skills";
import Project from "./pages/project";
import Contact from "./pages/contact";

import Footer from './components/Footer/footer';
function App() {
  return(
    <div>
<Nav></Nav>
<Main></Main>
<Footer></Footer>
 </div>
  );
}

export default App
