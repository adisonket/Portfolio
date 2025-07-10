import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Photo from '../assets/Photo.jpg';
import { HERO_CONTENT } from '../constants/index.js';

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-28 md:pt-32 pb-16 flex flex-col md:flex-row items-center justify-center gap-8 container mx-auto px-4 mt-8"
      data-aos="fade-up"
    >
      <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center justify-center gap-8 w-full">
        
        <div className="flex-1 w-full md:w-1/2 text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Sanket Adhikary
          </h1>
          <div className="text-fuchsia-400 text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
            <TypeAnimation
              sequence={[
                'Web Developer',
                2000,
                'Programmer',
                2000,
                'Web Programming Enthusiast',
                2000,
              ]}
              wrapper="span"
              speed={50}
              deletionSpeed={30}
              repeat={Infinity}
              cursor={true}
            />
          </div>
          <p className="text-neutral-300 text-sm sm:text-base md:text-lg max-w-xl">
            {HERO_CONTENT}
          </p>
        </div>

        <div className="flex-1 w-full md:w-1/2 flex justify-center">
          <img
            src={Photo}
            alt="Sanket Adhikary"
            className="w-40 sm:w-56 md:w-72 rounded-full border-4 border-white shadow-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;