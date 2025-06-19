import React from 'react';

const EventDetails = () => {
  const details = [
    { label: "📍 Location", value: "Mumbai Convention Centre, India" },
    { label: "📅 Date", value: "15th - 17th September 2025" },
    { label: "🎫 Ticket Types", value: "Individual Pass | Group Delegate Pass | Exhibitor Pass" }
  ];

  return (
    <section className="py-16 bg-rose-50 text-gray-800 scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Event Details</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {details.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300"
            >
              <span className="text-3xl mb-2 block">{item.label}</span>
              <p className="text-lg font-medium mt-2">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
