import React from 'react';

const WhoShouldAttend = () => {
  const audience = [
    "Fashion Brands & Retailers",
    "Textile Manufacturers",
    "Exporters & Importers",
    "Startups & Innovators",
    "Designers & Creative Agencies",
    "Policymakers & Government Representatives",
    "Investors & Venture Capitalists",
    "Fashion Tech Solution Providers",
    "E-Commerce & Online Fashion Platforms"
  ];

  return (
    <section id="attend" className="py-16 bg-gray-50 text-gray-800 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Who Should Attend?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audience.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300"
            >
              <h3 className="text-lg font-semibold">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoShouldAttend;
