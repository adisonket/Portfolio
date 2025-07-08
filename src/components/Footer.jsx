import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center text-neutral-400 py-6 text-xs sm:text-sm">
      © {new Date().getFullYear()} Sanket Adhikary. All rights reserved.
    </footer>
  );
};

export default Footer;
