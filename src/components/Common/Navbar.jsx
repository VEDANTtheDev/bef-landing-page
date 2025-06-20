import React from "react";
import befLogo from "../../assets/images/bef-logo.jpeg"; // ✅ Correct import

const Navbar = () => {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-7">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={befLogo} // ✅ Use imported variable
            alt="BEF Logo"
            className="h-12 w-auto"
          />
          <span className="ml-2 text-xl font-bold text-gray-800">BEF</span>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-9 text-gray-700 font-medium text-sm md:text-base">
          <a href="#home" className="hover:text-pink-600">Home</a>
          <a href="#about" className="hover:text-pink-600">About BEF</a>
          <a href="#eventdetails" className="hover:text-pink-600">Event Details</a>
          <a href="#pricing" className="hover:text-pink-600">Pricing</a>
          <a href="#register" className="hover:text-pink-600">Register</a>
          <a href="#faqs" className="hover:text-pink-600">FAQs</a>
          <a href="#about" className="hover:text-pink-600">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
