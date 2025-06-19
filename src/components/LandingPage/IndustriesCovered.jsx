import React from 'react';

const IndustriesCovered = () => {
  return (
    <section id="industries" className="py-16 bg-gray-100 text-gray-800 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Industries Covered at BEF</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white shadow p-6 rounded-xl">Clothing & Fashion</div>
          <div className="bg-white shadow p-6 rounded-xl">Textile & Fabric</div>
          <div className="bg-white shadow p-6 rounded-xl">Sustainable Fashion</div>
          <div className="bg-white shadow p-6 rounded-xl">Export & Import</div>
          <div className="bg-white shadow p-6 rounded-xl">Startups & Innovation</div>
          <div className="bg-white shadow p-6 rounded-xl">Manufacturing & Technology</div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesCovered;
