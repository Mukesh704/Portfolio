import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import pattern from '../assets/pattern.svg';

const ProjectCard = ({ project }) => {
  const {
    id,
    title,
    description,
    image,
    techStack,
    sourceCodeLink,
    liveLink,
  } = project;

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/projects/${id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="flex flex-col md:flex-row bg-transparent rounded-2xl overflow-hidden shadow-md relative hover:shadow-[#c27aff] transition-shadow cursor-pointer"
    >
      {/* Left: Image */}
      <div className="md:w-[35%] w-full relative z-10">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/* Center S-gap */}
      <div className="w-4 bg-[#201e23] relative z-0 hidden md:block">
        <div className="h-full w-full bg-[#201e23]" />
      </div>

      {/* Right: Content */}
      <div className="md:w-[65%] w-full px-8 py-6 bg-[#2a252f] relative z-10 rounded-2xl">
        <img
          src={pattern}
          alt="pattern"
          className="absolute top-0 left-[780px] w-40 h-40 rotate-90 opacity-20 pointer-events-none hidden md:block"
        />
        <h2 className="text-2xl font-bold mb-3 text-white">{title}</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="text-sm px-2 py-1 border border-purple-400 rounded-full text-purple-200"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="text-gray-300 mb-5">{description}</p>
        <div className="flex gap-4 flex-wrap">
          <a
            href={sourceCodeLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()} // prevent card navigation
            className="bg-transparent border border-purple-400 text-purple-200 px-4 py-2 rounded-lg hover:bg-purple-600 transition"
          >
            Source Code
          </a>
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} // prevent card navigation
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition flex items-center gap-2"
            >
              View Page <FaExternalLinkAlt className="text-sm" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;