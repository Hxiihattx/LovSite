
import React from 'react';
import { SectionBadge, Button } from '../components/UI';

const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "How long does a typical website project take?",
      a: "A standard corporate website usually takes between 4 to 8 weeks from discovery to launch. High-end e-commerce solutions or complex custom platforms may take longer, depending on the scope of integrations and content volume."
    },
    {
      q: "Is every website GDPR/DSGVO compliant?",
      a: "Absolutely. Operating out of Vienna, compliance isn't an afterthought for us—it's the foundation. We use cookie-less analytics, self-hosted fonts, and secure Austrian/EU hosting to ensure you are fully protected."
    },
    {
      q: "Do you offer ongoing social media management?",
      a: "Yes. Our Content Design service covers everything from strategic planning and visual production to community management. We specifically focus on premium B2B LinkedIn presence and high-end Instagram Reels."
    },
    {
      q: "Can you help with local Austrian SEO?",
      a: "Yes. We optimize every site for Google.at, focusing on technical SEO, high-speed performance, and local keyword strategy to ensure you rank where it matters most for your business."
    },
    {
      q: "How do we start working together?",
      a: "The first step is a discovery call. You can book this through our Booking page. We'll discuss your goals, review your current presence, and provide a tailored strategy and proposal."
    }
  ];

  return (
    <div className="pt-32 md:pt-48 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-20">
          <SectionBadge>Questions & Answers</SectionBadge>
          <h1 className="tracking-tightest mb-8 leading-tight">Frequently Asked.</h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Everything you need to know about our digital craft and partnership process.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details key={idx} className="group border-b border-gray-100 py-6">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-lg md:text-xl font-bold tracking-tight group-open:text-accent-green-deep transition-colors">
                  {faq.q}
                </h3>
                <span className="text-2xl transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="mt-6 text-gray-600 leading-relaxed text-base max-w-2xl">
                {faq.a}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-24 bg-bg-light-secondary rounded-3xl p-10 text-center">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-gray-500 mb-8">We're here to help you navigate the digital landscape in Austria.</p>
          <Button to="/contact" variant="primary">Talk to Ihtasham</Button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
