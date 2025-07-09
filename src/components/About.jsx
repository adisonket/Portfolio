import React from 'react';
import { ABOUT_TEXT, CONTACT } from '../constants/index.js';
import { FaLinkedin, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

const socialLinks = [
  { icon: FaLinkedin, url: 'https://www.linkedin.com/in/sanket-adhikary-020888253', color: '#0077B5' },
  { icon: FaFacebook, url: 'https://www.facebook.com/share/1Aq6WdSY1b/?mibextid=wwXIfr', color: '#1877F2' },
  { icon: FaInstagram, url: 'https://www.instagram.com/sanket_adhikary?igsh=enRjN205bzVmdmx6&utm_source=qr', color: '#E1306C' },
  { icon: FaGithub, url: 'https://github.com/adisonket', color: '#ffffff' },
];

const About = () => {
  return (
    <section id="about" className="py-16 container mx-auto px-4" data-aos="fade-up">
      <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl p-8 md:p-12 shadow-xl max-w-5xl mx-auto text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">About Me</h2>
        <p className="text-neutral-300 text-base sm:text-lg mb-6">
          {ABOUT_TEXT}
        </p>
        <div className="flex flex-col sm:flex-row justify-start gap-8 text-sm sm:text-base text-neutral-300">
          <p><span className="text-white font-semibold">Email:</span> {CONTACT.email}</p>
          <p><span className="text-white font-semibold">Phone:</span> {CONTACT.phoneNo}</p>
          <p><span className="text-white font-semibold">Address:</span> {CONTACT.address}</p>
        </div>
        <div className="flex justify-start gap-6 mt-8 text-2xl">
          {socialLinks.map((link, i) => {
            const Icon = link.icon;
            return (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform hover:scale-125"
                style={{ color: link.color }}
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;