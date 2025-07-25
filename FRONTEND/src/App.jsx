import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-zinc-900 text-white font-sans">
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;