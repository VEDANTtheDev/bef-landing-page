import React, { useState } from 'react';

const FAQs = () => {
  const faqData = [
    {
      question: "How can I register for the event?",
      answer: "You can register directly on our website using the 'Register' or 'Get Delegate Pass' buttons."
    },
    {
      question: "What is included in the event pass?",
      answer: "Your pass includes access to all sessions, exhibitions, networking opportunities, and selected panel discussions."
    },
    {
      question: "Is accommodation provided?",
      answer: "Accommodation is not included in the pass, but we provide recommendations and support for nearby hotels."
    },
    {
      question: "Can I get a refund if I cancel?",
      answer: "Refunds are subject to our cancellation policy. Please contact us for more details."
    },
    {
      question: "How can I contact the organizing team?",
      answer: "You can reach us via the Contact Us form or email us at bef.support@example.com."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section  id="faqs" className="py-16 bg-gray-50 text-gray-800 scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <button
                className="w-full text-left flex justify-between items-center py-2 font-semibold"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span>{activeIndex === index ? '−' : '+'}</span>
              </button>

              {activeIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
