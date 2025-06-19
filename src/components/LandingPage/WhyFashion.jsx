import React from 'react';

const WhyFashion = () => {
  return (
    <section id="whyfashion" className="py-16 bg-gray-160 text-gray-800 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Why Clothing & Fashion at BEF?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Fastest Growing Sector */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300">
            <span className="text-4xl mb-4 inline-block">🚀</span>
            <h3 className="text-xl font-semibold mb-2">Fastest Growing Sector</h3>
            <p className="text-gray-600">
              The fashion and textile industry is driving India’s economic growth and global influence.
            </p>
          </div>

          {/* Global Opportunities */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300">
            <span className="text-4xl mb-4 inline-block">🌏</span>
            <h3 className="text-xl font-semibold mb-2">Global Opportunities</h3>
            <p className="text-gray-600">
              Connect with investors, exporters, and explore international fashion markets.
            </p>
          </div>

          {/* Sustainable Innovation */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300">
            <span className="text-4xl mb-4 inline-block">💡</span>
            <h3 className="text-xl font-semibold mb-2">Sustainable Innovation</h3>
            <p className="text-gray-600">
              Discover trends in eco-friendly materials, digital fashion, and circular economy.
            </p>
          </div>

          {/* Direct Networking */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300">
            <span className="text-4xl mb-4 inline-block">🤝</span>
            <h3 className="text-xl font-semibold mb-2">Direct Networking</h3>
            <p className="text-gray-600">
              Meet policymakers, investors, and industry leaders shaping the future of fashion.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyFashion;
