import React, { useState } from "react";
import {
  HTML_Logo,
  CSS_Logo,
  JavaScript_Logo,
  Java_Logo,
  Bootstrap_Logo,
  React_Logo,
  Git_Logo,
  Github_Logo,
  VSCode_Logo,
  Tailwind_Logo,
  Postman_Logo,
  ExpressJs_Logo,
  MySQL_Logo,
  MongoDB_Logo,
  Docker_Logo,
  Nodejs_Logo,
} from "../assets/images/index";

function Skills() {
  const [name, setName] = useState(null);

  const cards = [
    {
      title: "Languages",
      items: [
        { src: JavaScript_Logo, alt: "JavaScript" },
        { src: Java_Logo, alt: "Java" },
        { src: HTML_Logo, alt: "HTML5" },
        { src: CSS_Logo, alt: "CSS3" },
      ],
    },
    {
      title: "Library & Frameworks",
      items: [
        { src: Nodejs_Logo, alt: "Node.js" },
        { src: React_Logo, alt: "React" },
        { src: Bootstrap_Logo, alt: "Bootstrap" },
        { src: Tailwind_Logo, alt: "Tailwind" },
        { src: ExpressJs_Logo, alt: "Express.js" },
      ],
    },
    {
      title: "Version Control",
      items: [
        { src: Git_Logo, alt: "Git" },
        { src: Github_Logo, alt: "GitHub" },
      ],
    },
    {
      title: "Databases",
      items: [
        { src: MySQL_Logo, alt: "MySQL" },
        { src: MongoDB_Logo, alt: "MongoDB" },
      ],
    },
    {
      title: "Other Tools & Services",
      items: [
        { src: Postman_Logo, alt: "Postman" },
        { src: Docker_Logo, alt: "Docker" },
        { src: VSCode_Logo, alt: "Visual Studio Code" },
      ],
    },
  ];

  return (
    <section id="skills" className="bg-[#201e23] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header with hover name to the right */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-white text-center">Skills</h1>

          {/* Fixed space for hover text */}
          <div
            aria-live="polite"
            className="mt-4 text-center sm:text-right text-[#7e9199] text-lg sm:text-2xl font-bold min-h-[2.5rem] flex items-center justify-center sm:justify-end"
          >
            <span
              className={`text-[#c27aff] drop-shadow-md transition-all duration-300 transform ${name ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                }`}
            >
              {name}
            </span>
          </div>
        </header>

        {/* Skills layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8">
          {cards.map((card, idx) => (
            <div key={idx}>
              <h3 className="text-white text-lg sm:text-xl font-semibold mb-4">
                {card.title}
              </h3>

              <div className="flex flex-wrap gap-3 sm:gap-4">
                {card.items.map((icon, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={icon.alt}
                    onMouseEnter={() => setName(icon.alt)}
                    onMouseLeave={() => setName(null)}
                    className="flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-white transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#d488eb]"
                  >
                    <img
                      src={icon.src}
                      alt={icon.alt}
                      className="h-7 sm:h-8"
                    />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;