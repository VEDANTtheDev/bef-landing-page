import React from 'react';
import befLogo from '../../assets/images/bef-logo.jpeg'; // Adjust path as needed

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white min-h-screen flex flex-col items-center justify-center relative px-4 scroll-mt-24">
      
      {/* Logo */}
      {/* <img 
        src={befLogo} 
        alt="BEF Logo" 
        className="w-32 md:w-40 absolute top-5 left-5 md:left-3"
      /> */}
      
      {/* Hero Content */}
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Empowering India’s Fashion Revolution:
          <span className="block text-yellow-300">Invest, Innovate, Inspire</span>
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Join the movement driving India’s leadership in the global clothing and fashion industry. 
          Unlock growth, sustainability, and global market access.
        </p>
        <div className="space-x-4">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-2xl transition duration-300 cursor-pointer">
            Register Now
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white hover:text-pink-600 font-semibold py-3 px-6 rounded-2xl transition duration-300 cursor-pointer">
            Book Your Pass
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
