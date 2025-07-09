import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full left-0  bg-white/10 backdrop-blur border-b border-white/10">
      <div className="relative container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-bold">Sanket Adhikary</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 justify-center mx-auto text-lg font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth={true}
              offset={-96}
              duration={600}
              className="hover:text-fuchsia-400 cursor-pointer transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Hamburger Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-72 bg-white/10 backdrop-blur border-l border-white/10 transform ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out md:hidden flex flex-col gap-8 p-8`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth={true}
              offset={-96}
              duration={600}
              onClick={() => setMenuOpen(false)}
              className="text-lg hover:text-fuchsia-400 cursor-pointer transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;