import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetails";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-[#201e23] text-white scroll-smooth">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <About />
                <Skills />
                <div className="w-60 sm:w-340 h-[1px] bg-white mx-auto opacity-50"></div>
                <Certificates />
                <Projects id="projects"/>
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;