import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow sticky top-0 z-50 h-25">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src="src\assets\images\bef-logo.jpeg" alt="BEF Logo" className="h-21 w-auto" />
          <span className="ml-2 text-xl font-bold text-gray-800">BEF</span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-gray-700 font-medium">
          <a href="#home" className="hover:text-pink-600">Home</a>
          <a href="#whyfashion" className="hover:text-pink-600">Why Fashion</a>
          <a href="#attend" className="hover:text-pink-600">Who Should Attend</a>
          <a href="#opportunities" className="hover:text-pink-600">Opportunities</a>
          <a href="#industries" className="hover:text-pink-600">Industries Covered</a> {/* ✅ New Link */}
          <a href="#pricing" className="hover:text-pink-600">Pricing</a>
          <a href="#faqs" className="hover:text-pink-600">FAQs</a>
          <a href="#contact" className="hover:text-pink-600">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
