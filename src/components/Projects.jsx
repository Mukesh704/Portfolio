import React from "react";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";
import UrbanBasket from "../assets/project-images/UrbanBasket1.png"
import AdminUrbanBasket from "../assets/project-images/Admin-UrbanBasket1.png"
import travel1 from "../assets/project-images/travel1.png"
import netflix1 from "../assets/project-images/netflix1.png"
import EcoPath1 from "../assets/project-images/EcoPath1.png"

const projects = [
  {
    id: "urban-basket",
    title: "UrbanBasket - Ecommerce Website",
    description:
      "UrbanBasket - An e-commerce website enabling users to browse, search, and purchase products with secure authentication, wishlist, cart, checkout, and order management features.",
    image: UrbanBasket,
    techStack: [
      "Node.js",
      "MongoDB",
      "Express.js",
      "React.js",
    ],
    sourceCodeLink: "https://github.com/Mukesh704/E-commerce",
    liveLink: "https://urban-basket.netlify.app/",
  },
  {
    id: "admin-urban-basket",
    title: "Admin - UrbanBasket (E-Commerce)",
    description:
      "Admin-UrbanBasket - An admin dashboard for managing products, categories, users, and orders with real-time statistics and delivery status updates.",
    image: AdminUrbanBasket,
    techStack: [
      "Node.js",
      "MongoDB",
      "Express.js",
      "React.js",
    ],
    sourceCodeLink: "https://github.com/Mukesh704/E-commerce",
    liveLink: "https://admin-urban-basket.netlify.app/",
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
    id: "waste-management",
    title: "EcoPath - Waste Management",
    description:
      "A Waste Management System that allows citizens to file complaints, track waste, and leverage AI for smart waste categorization and municipal insights.",
    image: EcoPath1,
    techStack: [
      "Node.js",
      "React.js",
      "Express.js",
      "MongoDB Atlas",
      "Chakra UI",
      "JWT Auth",
      "GridFS",
      "Google Gemini AI",
    ],
    sourceCodeLink: "https://github.com/Mukesh704/Waste-Management",
    liveLink: "https://eco-path.netlify.app/",
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