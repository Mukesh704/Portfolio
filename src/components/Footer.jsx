import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-[#322d36] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8 border-t border-gray-600 pt-10">

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-3xl ">
            {[
              { icon: <FaEnvelope />, link: "mailto:mukeshdalai101@gmail.com" },
              { icon: <FaGithub />, link: "https://github.com/Mukesh704" },
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/mukesh-dalai-75058b279/" },
              { icon: <SiLeetcode />, link: "https://leetcode.com/u/Mukesh704/" },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#413c46] hover:bg-[#5a5560] p-3.5 rounded-full transition-colors flex items-center justify-center"
              >
                {item.icon}
              </a>
            ))}
          </div>

          <div className="mt-4 space-y-1">
            <p className="text-sm text-gray-400">
              📧 <a href="mailto:mukeshdalai101@gmail.com" className="hover:underline">
                mukeshdalai101@gmail.com
              </a>
            </p>
            <p className="text-sm text-gray-400">
              📞 <a href="tel:+916263294639" className="hover:underline">
                +91 62632 94639
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-2xl font-extrabold tracking-wide text-[#a3a0ff]">
            MUKESH KUMAR DALAI
          </h2>
          <p className="text-sm text-gray-300 mt-1">SOFTWARE DEVELOPER</p>
          <p className="text-xs text-gray-400 mt-3 italic">
            Made with ❤️ using ReactJS
          </p>
          <p className="text-xs text-gray-500 mt-1">
            © Mukesh Kumar Dalai {new Date().getFullYear()}
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;