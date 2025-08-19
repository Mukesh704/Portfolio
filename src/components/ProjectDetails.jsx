import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import UrbanBasket1 from '../assets/project-images/UrbanBasket1.png'
import UrbanBasket2 from '../assets/project-images/UrbanBasket2.png'
import UrbanBasket3 from '../assets/project-images/UrbanBasket3.png'
import UrbanBasket4 from '../assets/project-images/UrbanBasket4.png'
import UrbanBasket5 from '../assets/project-images/UrbanBasket5.png'
import UrbanBasket6 from '../assets/project-images/UrbanBasket6.png'
import UrbanBasket7 from '../assets/project-images/UrbanBasket7.png'
import UrbanBasket8 from '../assets/project-images/UrbanBasket8.png'
import UrbanBasket9 from '../assets/project-images/UrbanBasket9.png'
import UrbanBasket10 from '../assets/project-images/UrbanBasket10.png'
import UrbanBasket11 from '../assets/project-images/UrbanBasket11.png'
import UrbanBasket12 from '../assets/project-images/UrbanBasket12.png'
import UrbanBasket13 from '../assets/project-images/UrbanBasket13.png'
import UrbanBasket14 from '../assets/project-images/UrbanBasket14.png'
import UrbanBasket15 from '../assets/project-images/UrbanBasket15.png'
import UrbanBasket16 from '../assets/project-images/UrbanBasket16.png'
import UrbanBasket17 from '../assets/project-images/UrbanBasket17.png'
import UrbanBasket18 from '../assets/project-images/UrbanBasket18.png'
import UrbanBasket19 from '../assets/project-images/UrbanBasket19.png'
import UrbanBasket20 from '../assets/project-images/UrbanBasket20.png'

import AdminUrbanBasket1 from '../assets/project-images/Admin-UrbanBasket1.png'
import AdminUrbanBasket2 from '../assets/project-images/Admin-UrbanBasket2.png'
import AdminUrbanBasket3 from '../assets/project-images/Admin-UrbanBasket3.png'
import AdminUrbanBasket4 from '../assets/project-images/Admin-UrbanBasket4.png'
import AdminUrbanBasket5 from '../assets/project-images/Admin-UrbanBasket5.png'
import AdminUrbanBasket6 from '../assets/project-images/Admin-UrbanBasket6.png'
import AdminUrbanBasket7 from '../assets/project-images/Admin-UrbanBasket7.png'
import AdminUrbanBasket8 from '../assets/project-images/Admin-UrbanBasket8.png'

import travel1 from '../assets/project-images/travel1.png'
import travel2 from '../assets/project-images/travel2.png'
import travel3 from '../assets/project-images/travel3.png'
import travel4 from '../assets/project-images/travel4.png'
import travel5 from '../assets/project-images/travel5.png'

import EcoPath1 from '../assets/project-images/EcoPath1.png'
import EcoPath2 from '../assets/project-images/EcoPath2.png'
import EcoPath3 from '../assets/project-images/EcoPath3.png'
import EcoPath4 from '../assets/project-images/EcoPath4.png'
import EcoPath5 from '../assets/project-images/EcoPath5.png'
import EcoPath6 from '../assets/project-images/EcoPath6.png'
import EcoPath7 from '../assets/project-images/EcoPath7.png'
import EcoPath8 from '../assets/project-images/EcoPath8.png'
import EcoPath9 from '../assets/project-images/EcoPath9.png'
import EcoPath10 from '../assets/project-images/EcoPath10.png'
import EcoPath11 from '../assets/project-images/EcoPath11.png'

import nteflix1 from "../assets/project-images/netflix1.png"
import nteflix2 from "../assets/project-images/netflix2.png"
import nteflix3 from "../assets/project-images/netflix3.png"
import { SiE3 } from "react-icons/si";

// Example data with multiple images
const projects = [
    {
        id: "urban-basket",
        title: "UrbanBasket - Ecommerce Website",
        description:
            "This e-commerce platform is built using the MERN stack (MongoDB, Express.js, React, and Node.js) and provides a seamless shopping experience for customers. Users can create accounts, log in securely with JWT authentication, and manage their profile information. The website allows customers to browse through products, search for specific items using keywords or categories, and view detailed product pages that include descriptions, reviews, ratings, and wishlist options.\n\nThe shopping cart feature enables users to add or remove products, adjust quantities, and view a running total before proceeding to checkout. A streamlined checkout process supports address management, selection of primary or alternative addresses, and order placement with delivery tracking. Users can also maintain a wishlist for products they want to save for later.\n\nDynamic features like review submission, star ratings (including half stars), deal-of-the-day sliders, and category-based browsing enhance the shopping experience. The frontend, built with React and styled using Tailwind CSS, ensures a responsive, modern, and user-friendly interface. The backend, powered by Express and MongoDB, manages products, users, orders, wishlist, and authentication securely with token handling and route protection.\n\nOverall, this project delivers a robust, scalable, and user-friendly e-commerce solution, laying the foundation for a professional shopping platform that can be extended with features like payment integration and analytics.",
        images: [
            UrbanBasket1,
            UrbanBasket2,
            UrbanBasket3,
            UrbanBasket4,
            UrbanBasket5,
            UrbanBasket6,
            UrbanBasket7,
            UrbanBasket8,
            UrbanBasket9,
            UrbanBasket10,
            UrbanBasket11,
            UrbanBasket12,
            UrbanBasket13,
            UrbanBasket14,
            UrbanBasket15,
            UrbanBasket16,
            UrbanBasket17,
            UrbanBasket18,
            UrbanBasket19,
            UrbanBasket20,
        ],
        techStack: [
            "Node.js",
            "MongoDB",
            "Express.js",
            "React.js",
            "Tailwind CSS",
            "Framer Motion",
            "Axios",
            "React Slick + Slick Carousel",
            "Lucide React & React Icons",
            "JWT",
            "Bcrypt",
            "Nodemailer",
            "Dotenv",
            "Crypto",
            "Body-parser / CORS",
        ],
        sourceCodeLink: "https://github.com/Mukesh704/E-commerce",
        liveLink: "https://urban-basket.netlify.app/",
    },
    {
        id: "admin-urban-basket",
        title: "Admin - UrbanBasket (E-Commerce)",
        description:
            "The Admin Panel is a dedicated dashboard built using the MERN stack to give administrators full control over the e-commerce platform. It provides a secure login system with JWT-based authentication to ensure only authorized admins can access it.\n\nThrough the dashboard, admins can manage the entire product catalog by performing CRUD (Create, Read, Update, Delete) operations on products and categories. The product form supports multiple images, category selection with pill-style UI, and easy updates to product details. Categories can be added or removed dynamically, ensuring flexibility for catalog growth.\n\nThe order management system enables admins to monitor all placed orders, filter them by recent or undelivered status, and update delivery statuses with a single click. Additionally, the dashboard includes user management capabilities, where admins can view registered users and manage their roles.\n\nReal-time admin statistics are displayed to provide insights into total orders, revenue, product counts, and user activity. The frontend is developed with React + Tailwind CSS, offering a clean, responsive, and professional interface with modals, dropdowns, and dynamic tables. The backend is built with Node.js, Express, and MongoDB, ensuring scalability and secure data handling.\n\nThis Admin Panel empowers store owners with a centralized, efficient, and intuitive management system to run their e-commerce business effectively.",
        images: [
            AdminUrbanBasket1,
            AdminUrbanBasket2,
            AdminUrbanBasket3,
            AdminUrbanBasket4,
            AdminUrbanBasket5,
            AdminUrbanBasket6,
            AdminUrbanBasket7,
            AdminUrbanBasket8,
        ],
        techStack: [
            "Node.js",
            "MongoDB",
            "Express.js",
            "React.js",
            "Tailwind CSS",
            "Framer Motion",
            "Axios",
            "JWT",
            "Bcrypt",
            "Dotenv",
            "Body-parser / CORS",
        ],
        sourceCodeLink: "https://github.com/Mukesh704/E-commerce",
        liveLink: "https://admin-urban-basket.netlify.app/",
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
        id: "waste-management",
        title: "EcoPath - Waste Management",
        description:
            "The EcoPath - Waste Management System is a full-stack MERN (MongoDB, Express.js, React, Node.js) project designed to improve urban waste monitoring and streamline municipal operations. Citizens can easily file complaints about uncollected or mismanaged waste by providing details and attaching images of the waste for better visibility.\n\nA unique feature of this system is the AI-powered waste classification module, which automatically analyzes uploaded images and estimates waste composition percentages (e.g., Plastic – 15%, Paper – 20%, Organic – 50%) to help municipalities optimize recycling and disposal strategies.\n\nThe platform also maintains a Locality Information Repository, where details such as locality name, population, and registered societies are stored. This helps municipal authorities keep track of the regions they serve and plan efficient waste collection schedules.\n\nOther features include:\n\n1. Complaint Tracking: Citizens can check the status of their complaints.\n2. Event Waste Reports: Users can report large waste generated from community events or gatherings.\n3. Analytics Dashboard: Admin/municipality officials get real-time analytics of waste data, complaint trends, and AI-driven waste categorization results.\n4. User Authentication: Secure login and signup for residents and municipal staff.\n5. Community Engagement: Residents can view resolved complaints, success stories, and ongoing initiatives.\n\nThis project not only improves transparency between citizens and municipal authorities but also leverages AI for sustainable waste management practices, making cities cleaner, smarter, and more efficient.",
        images: [
            EcoPath1,
            EcoPath2,
            EcoPath3,
            EcoPath4,
            EcoPath5,
            EcoPath6,
            EcoPath7,
            EcoPath8,
            EcoPath9,
            EcoPath10,
            EcoPath11,
        ],
        techStack: [
            "Google Generative AI SDK",
            "MongoDB Atlas",
            "React",
            "Node.js",
            "Express.js",
            "React Router DOM",
            "JWT",
            "Axios",
            "Chakra UI",
            "Framer Motion",
            "React-Toastify",
            "Mongoose",
            "GridFS",
            "bcryptjs",
            "Nodemailer",
        ],
        sourceCodeLink: "https://github.com/Mukesh704/Waste-Management",
        liveLink: "https://eco-path.netlify.app/",
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