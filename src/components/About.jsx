import React from "react";
import { ABOUT_TEXT, CONTACT } from "../constants/index";
import { FaLinkedin, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const socialLinks = [
  { icon: FaLinkedin, url: "https://www.linkedin.com/in/sanket-adhikary-020888253" },
  { icon: FaFacebook, url: "https://www.facebook.com/share/1Aq6WdSY1b/?mibextid=wwXIfr" },
  { icon: FaInstagram, url: "https://www.instagram.com/sanket_adhikary?igsh=enRjN205bzVmdmx6&utm_source=qr" },
  { icon: FaGithub, url: "https://github.com/adisonket" },
];

const About = () => {
  return (
    <section
      id='about'
      className="scroll-mt-28 py-12 md:py-20 px-4 md:px-8 flex justify-center items-center"
      data-aos="fade-up"
    >
      <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-6 md:p-10 shadow-lg max-w-6xl w-full">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 text-white">About Me</h2>
        <p className="text-neutral-300 text-base sm:text-lg mb-6">{ABOUT_TEXT}</p>

        <div className="mt-6 space-y-2 text-sm sm:text-base">
          <p className="text-neutral-300">
            <span className="font-semibold text-white">Email:</span> {CONTACT.email}
          </p>
          <p className="text-neutral-300">
            <span className="font-semibold text-white">Phone:</span> {CONTACT.phoneNo}
          </p>
          <p className="text-neutral-300">
            <span className="font-semibold text-white">Address:</span> {CONTACT.address}
          </p>
        </div>

        <div className="flex gap-4 mt-8 text-xl sm:text-2xl">
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
    </section>
  );
};

export default About;