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
    <nav className='flex items-center justify-between px-8 py-6 text-white relative z-50'>

      {/* Logo */}
      <div className='flex flex-shrink-0 items-center'>
        <h1 className='text-2xl font-bold'>Portfolio</h1>
      </div>

      {/* Desktop Nav */}
      <ul className='hidden md:flex gap-8 text-lg font-medium'>
        {navLinks.map((link, index) => (
          <li key={index} className='group relative cursor-pointer'>
            <Link
              activeClass="text-fuchsia-400"
              to={link.id}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="block cursor-pointer"
            >
              {link.name}
            </Link>
            <span className='absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full'></span>
          </li>
        ))}
      </ul>

      {/* Mobile Icon */}
      <div className='md:hidden'>
        <button onClick={() => setMenuOpen(!menuOpen)} className='text-3xl'>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Social Links */}
      <div className='hidden md:flex items-center gap-4 text-2xl'>
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='absolute top-full left-0 w-full bg-neutral-800 py-6 flex flex-col items-center gap-6 md:hidden'>
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.id}
              smooth={true}
              offset={-80}
              duration={500}
              className='text-lg font-medium'
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className='flex gap-4 mt-4 text-2xl'>
            {socialLinks.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;