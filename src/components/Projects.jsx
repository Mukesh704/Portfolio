import React from "react";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";
import img1 from "../assets/green-login-background.jpg";
import travel1 from "../assets/project-images/travel1.png"
import netflix1 from "../assets/project-images/netflix1.png"

const projects = [
  {
    id: "elite-rentals",
    title: "Elite Rentals",
    description:
      "A car rental platform for admins and customers. Seamless booking and management.",
    image: img1,
    techStack: [
      "NodeJS",
      "MongoDB",
      "Express",
      "React",
      "Tailwind CSS",
      "Framer Motion",
    ],
    sourceCodeLink: "https://github.com/yourusername/elite-rentals",
    liveLink: "https://eliterentals.vercel.app",
  },
  {
    id: "travel-booking",
    title: "Travel Booking",
    description:
      "Dynamic travel booking website enabling users to search, book, and manage hotels and tour packages with secure authentication and scalable booking management.",
    image: travel1,
    techStack: [
      "Node.js",
      "React.js",
      "Express",
      "MongoDB Atlas",
    ],
    sourceCodeLink: "https://github.com/Mukesh704/Travel-Booking",
    liveLink: "https://indianbackpacker.netlify.app",
  },
  {
    id: "netflix-clone",
    title: "Netflix Clone",
    description:
      "A responsive Netflix-style web interface that mimics the look and feel of the streaming platform, featuring interactive carousels and visual flair.",
    image: netflix1,
    techStack: [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    sourceCodeLink: "https://github.com/Mukesh704/Netflix-Clone",
    liveLink: "https://netflic-clone-m07.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="px-6 md:px-12 py-10 bg-[#201e23] text-white"
    >
      <h1 className="text-4xl font-bold mb-10 text-center">My Projects</h1>
      <div className="space-y-10">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="block transition-transform hover:scale-[1.02]"
          >
            <ProjectCard project={project} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;