import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Footer Text */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h4 className="text-xl font-semibold">Bharat Economic Forum</h4>
          <p className="text-sm mt-1">Empowering India's Fashion Revolution</p>
        </div>

        {/* Footer Navigation Links */}
        <div className="flex space-x-6">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#whyfashion" className="hover:underline">Why Fashion</a>
          <a href="#attend" className="hover:underline">Who Should Attend</a>
          <a href="#opportunities" className="hover:underline">Opportunities</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
          <a href="#faqs" className="hover:underline">FAQs</a>
          <a href="#about" className="hover:underline">Contact</a>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="text-center text-gray-400 text-sm mt-4">
        &copy; 2025 Bharat Economic Forum. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
