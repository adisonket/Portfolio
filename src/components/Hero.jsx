import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Photo from '../assets/Photo.jpg';
import { HERO_CONTENT } from '../constants/index';

const Hero = () => {
  return (
    <section  id="home" className="flex flex-col md:flex-row items-center justify-center min-h-screen px-8 py-12 text-white">
      
      <div className="text-center md:text-left md:mr-12 flex-1 ml-10">
        <h1 className="text-6xl md:text-6xl font-bold mb-4">
          Sanket Adhikary
        </h1>

        <div className="text-blue-400 text-2xl md:text-4xl font-semibold h-[50px] mb-6">
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

        <p className="text-base md:text-lg text-neutral-300 max-w-xl">
          {HERO_CONTENT}
        </p>
      </div>

      <div className="mt-8 md:mt-0 flex-1 flex justify-center">
        <img 
          src={Photo} 
          alt="Sanket Adhikary" 
          className="w-80 h-80 rounded-full object-cover border-4 border-white shadow-lg"
        />
      </div>
    </section>
  );
}

export default Hero;
