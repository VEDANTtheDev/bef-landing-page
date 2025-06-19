import React from 'react';

const PricingSection = () => {
  const pricingOptions = [
    {
      title: "Individual Pass",
      price: "₹2,000",
      features: ["Access to all sessions", "Networking opportunities", "Entry to exhibitions"]
    },
    {
      title: "Group Delegate Pass",
      price: "₹8,000 (5 Members)",
      features: ["All Individual Pass benefits", "Team networking access", "Special group activities"]
    },
    {
      title: "Exhibitor Pass",
      price: "₹15,000",
      features: ["Premium booth space", "Product showcase slot", "VIP networking sessions"]
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-gray-100 text-gray-800 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Pricing & Passes</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition duration-300 flex flex-col items-center"
            >
              <h3 className="text-2xl font-semibold mb-4">{option.title}</h3>
              <p className="text-3xl font-bold mb-6">{option.price}</p>

              <ul className="text-gray-600 mb-6 space-y-2 text-left">
                {option.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-green-500 mr-2">✔️</span> {feature}
                  </li>
                ))}
              </ul>

              <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full transition cursor-pointer">
                Get Pass
              </button>
            </div>
          ))}
        </div>

        <p className="mt-8 text-gray-600">*Group discounts are available for more than 5 members.</p>
      </div>
    </section>
  );
};

export default PricingSection;
