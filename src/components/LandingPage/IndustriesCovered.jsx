import React from "react";

const IndustriesCovered = () => {
  return (
    <section
      id="industries"
      className="py-16 bg-gray-100 text-gray-800 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Industries Covered at BEF</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white shadow p-6 rounded-xl">
            Education & Employment
          </div>
          <div className="bg-white shadow p-6 rounded-xl">
            Food & Agriculture
          </div>
          <div className="bg-white shadow p-6 rounded-xl">Energy & Power</div>
          <div className="bg-white shadow p-6 rounded-xl">Health & Pharma</div>
          <div className="bg-white shadow p-6 rounded-xl">Advertising & PR</div>
          <div className="bg-white shadow p-6 rounded-xl">
            Environment & Sustainability
          </div>
          <div className="bg-white shadow p-6 rounded-xl">
            Beauty & Wellness
          </div>
          <div className="bg-white shadow p-6 rounded-xl">
            Finance & Investment
          </div>
          <div className="bg-white shadow p-6 rounded-xl">
            Manufacturing & MSMEs
          </div>
          <div className="bg-white shadow p-6 rounded-xl">
            Tourism & Hospitality
          </div>
          <div className="bg-white shadow p-6 rounded-xl">
            Rural Development
          </div>
          <div className="bg-white shadow p-6 rounded-xl">
            Web3, AI & DeepTech
          </div>
          <div className="bg-white shadow p-6 rounded-xl">
            Clothing & Fashion
          </div>
          <div className="bg-white shadow p-6 rounded-xl">
            Policy & Governance
          </div>
          <div className="bg-white shadow p-6 rounded-xl">
            Outerspace & SpaceTech
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesCovered;
