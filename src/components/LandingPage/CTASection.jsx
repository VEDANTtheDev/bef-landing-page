import React from 'react';

const CTASection = () => {
  return (
    <section id="register" className="py-16 bg-pink-600 text-white text-center scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Secure Your Spot Now
        </h2>
        <p className="mb-8 text-lg">
          Don’t miss the chance to be part of India’s most dynamic Clothing & Fashion forum.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-pink-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition cursor-pointer">
            Register
          </button>
          <button className="bg-white text-pink-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition cursor-pointer">
            Get Delegate Pass
          </button>
          <button className="bg-white text-pink-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition cursor-pointer">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
