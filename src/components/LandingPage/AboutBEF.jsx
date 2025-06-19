import React from "react";

const AboutBEF = () => {
  return (
    <section id="about" className="py-16 bg-pink-50 text-gray-800 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          About Bharat Economic Forum (BEF)
        </h2>

        {/* Image */}
        <img
          src="/images/bef-banner.png"
          alt="BEF Clothing Event"
          className="w-full max-w-2xl mx-auto rounded-xl shadow-lg mb-8"
        />

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
          Bharat Economic Forum (BEF) is a premier platform dedicated to
          empowering industries that shape India’s future. With a strong focus
          on Clothing & Fashion, BEF connects businesses, investors,
          policymakers, and innovators to drive sustainable growth, global
          market access, and leadership in fashion, textiles, and technology.
        </p>

        {/* Link Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a
            href="https://www.bharateconomicforum.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-medium hover:bg-blue-200 transition"
          >
            🌐 Official Website
          </a>
          <a
            href="https://www.linkedin.com/company/bharateconomicforum/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-5 py-2 rounded-full font-medium hover:bg-indigo-200 transition"
          >
            💼 LinkedIn
          </a>
          <a
            href="https://www.instagram.com/bharateconomicforum/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-5 py-2 rounded-full font-medium hover:bg-pink-200 transition"
          >
            📸 Instagram
          </a>
        </div>

        {/* CTA */}
        <a
          href="#"
          className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-2xl transition duration-300"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default AboutBEF;
