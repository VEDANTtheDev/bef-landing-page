import React from "react";
import conclaveBanner from "../../assets/images/conclave-banner.jpg"; // ✅ Correct image import

const ConclaveIntro = () => {
  return (
    <section
      id="conclave"
      className="py-16 bg-white text-gray-800 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          BEF 2025 Industry Conclave
        </h2>

        <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
          The BEF 2025 Industry Conclave brings together leaders from the
          fashion, textile, and innovation ecosystem to collaborate on shaping
          the future of India’s clothing industry. Dive into discussions,
          workshops, and networking opportunities designed to empower you and
          your business.
        </p>

        <img
          src={conclaveBanner} // ✅ Uses the imported image
          alt="BEF Conclave"
          className="w-full max-w-3xl mx-auto rounded-xl shadow-lg mb-8"
        />

        <a
          href="#eventdetails"
          className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-2xl transition duration-300"
        >
          Explore Agenda
        </a>
      </div>
    </section>
  );
};

export default ConclaveIntro;
