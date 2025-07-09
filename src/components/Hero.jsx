import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Photo from '../assets/Photo.jpg';
import { HERO_CONTENT } from '../constants/index';

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-row flex-wrap items-center justify-between py-8 md:py-12 px-4 md:px-8 gap-8 mb-8 md:mb-16"
    >
      <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-4 sm:p-6 md:p-10 shadow-lg w-full md:max-w-[55%]">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-white">
          Sanket Adhikary
        </h1>

        <div className="text-blue-400 text-lg sm:text-xl md:text-3xl font-semibold h-[50px] mb-6">
          <TypeAnimation
            sequence={[
              'Web Developer', 1500,
              'Programmer', 1500,
              'Web Programming Enthusiast', 1500,
            ]}
            speed={50}
            deletionSpeed={30}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
        </div>

        <p className="text-sm sm:text-base md:text-lg text-neutral-300">
          {HERO_CONTENT}
        </p>
      </div>

      <div className="flex-1 flex justify-center">
        <img
          src={Photo}
          alt="Sanket Adhikary"
          className="w-28 sm:w-40 md:w-72 lg:w-80 rounded-full object-cover border-4 border-white shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;