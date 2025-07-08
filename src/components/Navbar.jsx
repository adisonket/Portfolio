import React from 'react'
import { Link } from "react-scroll";
import { FaLinkedin, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Contact Me", id: "contact" },
];

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-8 py-6 text-white'>

      <div className='flex flex-shrink-0 items-center'>
        <h1 className='text-2xl font-bold'>Portfolio</h1>
      </div>

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

      <div className='flex items-center gap-4 text-2xl'>
        {[FaLinkedin, FaFacebook, FaInstagram, FaGithub].map((Icon, index) => (
          <div key={index} className='group relative cursor-pointer'>
            <Icon />
            <span className='absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full'></span>
          </div>
        ))}
      </div>
    </nav>
  )
}

export default Navbar;
