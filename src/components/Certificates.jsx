import React from "react";
import { DSA_Certificate, Nodejs_Certificate } from "../assets/images/index";
import { FaExternalLinkAlt } from "react-icons/fa";

const Certificates = () => {
  const certificates = [
    {
      title: "Java Data Structures and Algorithms",
      description:
        "This certification teaches Java basics: variables, arrays, objects, functions, OOP, functional programming, algorithms, and more.",
      image: DSA_Certificate,
      imageAlt: "Java DSA Certificate",
      // link: "",
    },
    {
      title: "NodeJS - Backend Mastery",
      description:
        `This certification in backend development with Node.js covers focusing on building RESTful APIs, handling databases, authentication, middleware, and optimizing server-side performance for scalable applications.`,
      image: Nodejs_Certificate,
      imageAlt: "Responsive Web Design Certificate",
    },
  ];

  return (
    <section id="certificates" className="bg-[#201e23] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <header className="mb-20">
          <h1 className="text-4xl font-bold text-center text-white">
            Certificates
          </h1>
          <div
            aria-live="polite"
            className="text-[#7e9199] text-lg sm:text-xl font-medium text-center mt-2"
          >
            {name || ""}
          </div>
        </header>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-[#2a252f] rounded-xl overflow-hidden shadow-lg hover:shadow-[#c27aff] transition-shadow duration-300 border-gray-200"
            >
              <img
                src={cert.image}
                alt={cert.imageAlt}
                className="w-full object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  {cert.title}
                </h2>
                <p className="text-white mt-2 text-sm sm:text-base leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;