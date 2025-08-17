import React, { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Track active section
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(section => observer.observe(section));
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  // Hide/show navbar on scroll
  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setShowNavbar(false); // hide on scroll down
      } else {
        setShowNavbar(true); // show on scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 w-full z-50 bg-[#201e23] transition-transform duration-500 ease-in-out ${
          showNavbar ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="relative max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center flex-shrink-0 cursor-pointer overflow-visible"
            onClick={scrollToTop}
          >
            <img
              src={logo}
              alt="Logo"
              className="h-28 w-auto -my-8 sm:h-32 sm:-my-10 object-contain"
            />
          </div>

          {/* Center Nav Links */}
          <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-16 text-white text-sm sm:text-base font-medium tracking-wide">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className={`hover:text-lime-400 transition duration-300 ${
                  activeSection === href.slice(1) ? 'text-lime-400' : ''
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Mobile menu icon */}
          <div className="flex items-center text-white text-2xl md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:text-lime-400 transition duration-300"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#201e23] px-6 pb-4">
            <nav className="flex flex-col gap-4 text-white text-base font-medium pt-2">
              {navLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`hover:text-lime-400 transition ${
                    activeSection === href.slice(1) ? 'text-lime-400' : ''
                  }`}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Spacer to prevent content hiding behind navbar */}
      <div className="h-20 sm:h-24"></div>
    </>
  );
};

export default Navbar;