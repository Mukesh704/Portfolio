import React, { useMemo } from 'react';
import { FaDownload } from 'react-icons/fa';
import profile from '../assets/profile.png';
import shape from '../assets/shape.png';

const generateRandomCircles = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.floor(Math.random() * 20) + 15,
    top: Math.random() * 100,
    left: Math.random() * 100,
    blur: Math.floor(Math.random() * 3) + 1,
  }));
};

const Hero = () => {
  const circles = useMemo(() => generateRandomCircles(12), []);

  return (
    <section
      id="home"
      className="relative px-6 lg:px-10 bg-[#201e23] text-white overflow-hidden flex flex-col lg:flex-row items-center lg:items-start justify-between pt-10 lg:pt-24 pb-10 lg:pb-16"
    >
      {/* Background Circles */}
      {circles.map((circle) => (
        <div
          key={circle.id}
          className="absolute rounded-full bg-white/10"
          style={{
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            top: `${circle.top}%`,
            left: `${circle.left}%`,
            filter: `blur(${circle.blur}px)`,
          }}
        />
      ))}

      {/* Left Text Content */}
      <div className="z-10 w-full lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
          Hello I'm <br />
          <span className="text-purple-400">Mukesh kumar Dalai</span> <br />
          Full-Stack Developer
        </h1>
        <p className="mt-6 text-gray-300 leading-relaxed">
          I specialize in crafting interactive, user-focused web experiences.
          With a passion for detail and design, I bring ideas to life through
          clean and responsive code.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
          <a
            href="https://drive.google.com/file/d/1xpk_cAgQ7N7wZfecgjmEXWYjRVnirAZD/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#9AA038] text-black px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-[#86912F] transition"
          >
            <FaDownload className="text-sm" />
            Download Resume
          </a>
          <a
            href="#contact"
            className="border-2 border-[#9AA038] text-[#9AA038] px-6 py-3 rounded-full font-semibold text-center hover:bg-[#9AA038] hover:text-black transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="relative w-full lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0">
        <div className="relative w-[280px] sm:w-[350px] lg:w-[500px]">
          <img
            src={shape}
            alt="decorative shape"
            className="w-full relative z-0"
          />
          <img
            src={profile}
            alt="profile"
            className="w-40 sm:w-52 lg:w-60 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;