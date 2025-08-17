import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="pt-16 pb-24 bg-[#201e23] text-gray-300">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          About Me
        </motion.h2>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <img
              src="/profile.jpg" // Replace with your professional headshot or avatar
              alt="Profile"
              className="w-64 h-64 object-cover rounded-2xl border-4 border-accent shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <p className="mb-6 text-lg leading-relaxed">
              Hi, I’m <span className="text-accent text-purple-400 font-semibold">Mukesh</span>, 
              a passionate <span className="text-accent font-semibold">Full-Stack Developer</span> 
              and a <span className="text-accent font-semibold">Bachelor of Technology (CSE) 2025</span> graduate.  
              I love building <span className="text-accent font-semibold">modern, scalable, and user-friendly web applications</span> 
              using cutting-edge technologies.
            </p>

            <p className="mb-6 text-lg leading-relaxed">
              Currently, I’m actively <span className="text-purple-400 font-semibold">looking for 
              exciting job opportunities</span> where I can contribute my skills, learn, 
              and grow with a dynamic team.
            </p>

            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-purple-800 to-purple-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              📩 Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;