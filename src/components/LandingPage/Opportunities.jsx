import React from 'react';

const Opportunities = () => {
  const benefits = [
    {
      title: "Investment & Funding Funnels",
      description: "Access exclusive funding opportunities and connect with top investors focused on the fashion and textile industry.",
      icon: "🎯"
    },
    {
      title: "Global Networking & Expansion",
      description: "Build valuable international connections and explore partnerships to take your brand global.",
      icon: "🌐"
    },
    {
      title: "Trend Insights & Market Access",
      description: "Stay ahead with the latest fashion trends, sustainability movements, and digital innovation strategies.",
      icon: "🔍"
    },
    {
      title: "Thought Leadership & Panels",
      description: "Gain insights from industry leaders, policymakers, and experts shaping the future of fashion.",
      icon: "💬"
    },
    {
      title: "Brand Showcases & Product Launches",
      description: "Get the spotlight for your latest collections, designs, and innovations at the event showcase.",
      icon: "📣"
    },
    {
      title: "Exclusive Fashion Exhibitions",
      description: "Showcase your collections, explore designer collaborations, and experience live fashion exhibitions.",
      icon: "🛍️"
    }
  ];

  return (
    <section id="opportunities" className="py-16 bg-gray-100 text-gray-800 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Opportunities & Benefits
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 flex flex-col items-center"
            >
              <span className="text-5xl mb-4">{item.icon}</span>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
