import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaLinkedin, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Contact Me", id: "contact" },
];

const socialLinks = [
  { icon: FaLinkedin, url: "https://www.linkedin.com/in/sanket-adhikary-020888253" },
  { icon: FaFacebook, url: "https://www.facebook.com/share/1Aq6WdSY1b/?mibextid=wwXIfr" },
  { icon: FaInstagram, url: "https://www.instagram.com/sanket_adhikary?igsh=enRjN205bzVmdmx6&utm_source=qr" },
  { icon: FaGithub, url: "https://github.com/adisonket" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className='flex items-center justify-between px-4 md:px-8 py-4 md:py-6 text-white relative z-50'>
        <div className='flex flex-shrink-0 items-center'>
          <h1 className='text-xl sm:text-2xl font-bold'>Portfolio</h1>
        </div>

        <ul className='hidden md:flex gap-6 lg:gap-10 text-base md:text-lg font-medium'>
          {navLinks.map((link, index) => (
            <li key={index} className='group relative cursor-pointer'>
              <Link
                activeClass="text-fuchsia-400"
                to={link.id}
                spy={true}
                smooth={true}
                offset={-80}
                duration={700}
                className="block cursor-pointer"
              >
                {link.name}
              </Link>
              <span className='absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full'></span>
            </li>
          ))}
        </ul>

        <div className='md:hidden'>
          <button onClick={() => setMenuOpen(true)} className='text-2xl'>
            <FaBars />
          </button>
        </div>

        <div className='hidden md:flex items-center gap-4 text-xl md:text-2xl'>
          {socialLinks.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className='group relative cursor-pointer'
              >
                <Icon />
                <span className='absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full'></span>
              </a>
            );
          })}
        </div>
      </nav>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-neutral-800 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 p-6 flex flex-col`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="self-end text-3xl mb-8 text-white"
        >
          <FaTimes />
        </button>
        <ul className="flex flex-col gap-6 text-lg text-white font-medium">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.id}
              smooth={true}
              offset={-80}
              duration={700}
              className="cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </ul>
        <div className="flex gap-4 mt-8 text-2xl">
          {socialLinks.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-fuchsia-400 transition-colors"
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
