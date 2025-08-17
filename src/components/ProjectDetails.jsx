import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import img1 from '../assets/project-images/car1.avif'
import img2 from '../assets/project-images/car2.avif'
import img3 from '../assets/project-images/car3.avif'
import img4 from '../assets/project-images/car4.avif'
import img5 from '../assets/project-images/car2.avif'
import img6 from '../assets/project-images/car3.avif'
import img7 from '../assets/project-images/car4.avif'

import travel1 from '../assets/project-images/travel1.png'
import travel2 from '../assets/project-images/travel2.png'
import travel3 from '../assets/project-images/travel3.png'
import travel4 from '../assets/project-images/travel4.png'
import travel5 from '../assets/project-images/travel5.png'

import nteflix1 from "../assets/project-images/netflix1.png"
import nteflix2 from "../assets/project-images/netflix2.png"
import nteflix3 from "../assets/project-images/netflix3.png"

// Example data with multiple images
const projects = [
    {
        id: "elite-rentals",
        title: "Elite Rentals",
        description:
            "Elite Rentals is a car rental platform where customers can seamlessly browse and book cars, while admins can manage bookings, cars, and users. Built with a MERN stack for full scalability and responsiveness. \n\nKey features include authentication, role-based dashboards, advanced car filtering, and secure payments. This project demonstrates full-stack development skills, backend scalability, and a polished UI/UX with Framer Motion animations.",
        images: [
            img1,
            img2,
            img3,
            img4,
            img5,
            img6,
            img7,
        ],
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
            "A full-stack travel booking platform that makes it easy for users to search, book, and manage their trips all in one place. The platform covers everything from hotel reservations to tour packages, giving travelers a seamless way to plan their journeys without jumping between multiple websites.\n\nOn the backend, I designed a system that focuses on scalability and efficiency. It manages bookings, trip details, and user data through well-structured RESTful APIs, ensuring smooth handling of requests even as the platform grows. To keep everything secure, I implemented token-based authentication with JWT, which protects user sessions and ensures data privacy during every interaction.\n\nThe frontend was built with a strong emphasis on user experience and responsiveness. The clean and modern interface makes it easy for users to browse hotels, view tour packages, and manage their bookings from any device. I wanted the design to feel intuitive and hassle-free, so travelers can focus more on planning their trip rather than navigating a complicated system.\n\nI followed modular coding practices and scalable architecture, which means the project is not only stable but also ready for future growth. Features like customer reviews, and personalized recommendations can be easily added without breaking the existing system.\n\nIn short, this project brings together functionality, security, and design to create a reliable travel booking experience that feels both simple and powerful for users.",
        images: [
            travel1,
            travel2,
            travel3,
            travel4,
            travel5,
        ],
        techStack: [
            "MongoDB Atlas",
            "React",
            "Node.js",
            "Express.js",
            "Tailwind CSS",
            "JWT",
            "Axios"
        ],
        sourceCodeLink: "https://github.com/Mukesh704/Travel-Booking",
        liveLink: "https://indianbackpacker.netlify.app/home",
    },
    {
        id: "netflix-clone",
        title: "Netflix Clone",
        description:
            "I built a Netflix-inspired frontend clone using only HTML, CSS, and JavaScript. The idea was to recreate the familiar Netflix look and feel while practicing responsive design and interactive UI elements.\n\nThe homepage features a hero section with a bold banner, followed by horizontal carousels for movies and shows. Users can scroll through categories with arrow buttons, and hover effects add a nice touch of interactivity to each card.\n\nI kept the design simple yet engaging—dark backgrounds, bold text, and Netflix’s signature red accents. The layout is fully responsive, so it works well across desktop and mobile screens.\n\nThis project was a great way to sharpen my frontend skills and explore how small touches like hover effects, smooth scrolling, and clean UI structure can make a site feel polished and professional.",
        images: [
            nteflix1,
            nteflix2,
            nteflix3,
        ],
        techStack: [
            "JavaScript",
            "HTML",
            "CSS",
        ],
        sourceCodeLink: "https://github.com/Mukesh704/Netflix-Clone",
        liveLink: "https://netflic-clone-m07.netlify.app/",
    },
];

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="text-center text-white py-20">
                <h2 className="text-2xl">Project not found</h2>
                <Link to="/#projects" className="text-blue-400 underline">
                    Back to Projects
                </Link>
            </div>
        );
    }

    return (
        <section className="min-h-screen bg-[#201e23] text-white px-6 md:px-16 py-14 relative">
            {/* Back Button */}
            <div className="absolute top-6 left-6">
                <HashLink
                    smooth
                    to="/#projects"
                    className="px-4 py-2 bg-gradient-to-r from-purple-800 to-purple-500 text-white hover:shadow-xl hover:scale-105 transition-transform duration-300 rounded-lg shadow-lg text-sm font-medium flex items-center gap-2"
                >
                    ← Back to Projects
                </HashLink>
            </div>

            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-center mb-10 pt-8"
            >
                {project.title}
            </motion.h1>

            {/* Bento Grid for Images */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-12 px-2 sm:px-4"
            >
                {project.images.map((src, idx) => (
                    <div
                        key={idx}
                        className="relative overflow-hidden rounded-lg sm:rounded-xl shadow-md group bg-gray-100 flex items-center justify-center"
                    >
                        <img
                            src={src}
                            alt={`project-${idx}`}
                            className="max-h-60 w-auto object-contain transition-transform duration-500 ease-in-out group-hover:scale-105"
                        />
                        {/* subtle dark overlay on hover */}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                ))}
            </motion.div>

            {/* Description */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="max-w-4xl mx-auto text-center"
            >
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed whitespace-pre-line">
                    {project.description}
                </p>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex flex-wrap justify-center gap-3 my-10"
            >
                {project.techStack.map((tech, index) => (
                    <span
                        key={index}
                        className="px-4 py-2 bg-gray-800 rounded-full text-sm font-medium shadow-md"
                    >
                        {tech}
                    </span>
                ))}
            </motion.div>

            {/* Buttons */}
            <div className="flex justify-center gap-6">
                {project.liveLink && (
                    <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition flex items-center gap-2"
                    >
                        View Live
                    </a>
                )}
                {project.sourceCodeLink && (
                    <a
                        href={project.sourceCodeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-transparent border border-purple-400 text-purple-200 px-4 py-2 rounded-lg hover:bg-purple-600 transition"
                    >
                        Source Code
                    </a>
                )}
            </div>
        </section>
    );
};

export default ProjectDetails;