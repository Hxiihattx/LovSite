
import React from 'react';
import { SectionBadge } from '../components/UI';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="bg-bg-light-secondary pt-24 md:pt-40 pb-20 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=50&w=1200" 
              alt="Lovable Website Studio Architecture" 
              className="rounded-xl grayscale w-full aspect-[4/5] object-cover shadow-2xl"
              loading="lazy"
            />
          </div>
          <div className="w-full md:w-1/2">
            <SectionBadge>Our Philosophy</SectionBadge>
            <h1 className="tracking-tightest mb-8 leading-tight">Lovable Website: Precise, Compliant, Creative.</h1>
            <p className="text-base md:text-xl text-gray-600 leading-relaxed mb-6">
              Based in Vienna, we bridge the gap between aesthetics and business goals. We are an agile collective of digital craftsmen dedicated to the Austrian DACH market.
            </p>
            <p className="text-sm md:text-base text-gray-500 leading-relaxed mb-6">
              Our founder, Ihtasham Manzoor, envisioned an agency where the high standards of Austrian craftsmanship could be translated into the digital realm. We don't just build websites; we create digital assets that grow your bottom line while respecting every pixel and legal requirement.
            </p>
            <p className="text-sm md:text-base text-gray-500 leading-relaxed">
              Precision is our baseline. Compliance is our duty. Creativity is our edge.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="italic font-serif leading-relaxed text-gray-800">
            "We believe that every digital touchpoint is an opportunity to build trust. In the Austrian market, trust is built through quality and reliability."
          </h2>
        </div>
      </section>

      <section className="bg-white pb-24 border-t border-gray-100 pt-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="group">
              <div className="text-3xl md:text-5xl font-bold mb-2 group-hover:text-accent-green-deep transition-colors">5+</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">Years of Digital Craft</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-5xl font-bold mb-2 group-hover:text-accent-green-deep transition-colors">50+</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">Brands Transformed</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-5xl font-bold mb-2 group-hover:text-accent-green-deep transition-colors">100%</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">DSGVO Compliant</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
