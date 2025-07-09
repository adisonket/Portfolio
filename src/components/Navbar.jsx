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
    <header className="w-full fixed top-0 left-0 z-50 bg-neutral-900/80 backdrop-blur border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-bold">Sanket Adhikary</h1>
        <nav className="hidden md:flex gap-10 justify-center mx-auto text-lg font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth={true}
              offset={-80}
              duration={600}
              className="hover:text-fuchsia-400 cursor-pointer transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-neutral-900 flex flex-col items-center gap-6 py-8 text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth={true}
              offset={-80}
              duration={600}
              onClick={() => setMenuOpen(false)}
              className="hover:text-fuchsia-400 cursor-pointer transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
