
import React from 'react';
import { SectionBadge } from '../components/UI';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section - Centered Text */}
      <section className="bg-bg-light-secondary pt-32 md:pt-48 pb-20 md:pb-32 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <SectionBadge>Our Philosophy</SectionBadge>
          <h1 className="tracking-tightest mb-8 leading-tight">Lovable Website: Precise, Compliant, Creative.</h1>
          <p className="text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Based in Vienna, we bridge the gap between aesthetics and business goals. We are an agile collective of digital craftsmen dedicated to the Austrian DACH market.
          </p>
        </div>
      </section>

      {/* Designer Bio Section - Image and Links Removed, Centered */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionBadge>The Architect</SectionBadge>
          <h2 className="tracking-tightest mb-8 leading-tight">Ihtasham Manzoor.</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-6">
            As the Creative Director and lead strategist, Ihtasham Manzoor envisioned an agency where the high standards of Austrian craftsmanship could be translated into the digital realm. With a background in strategic design and human-centric UX, he oversees every pixel that leaves our studio.
          </p>
          <p className="text-base text-gray-500 leading-relaxed">
            "We don't just build websites; we create digital assets that grow your bottom line while respecting every pixel and legal requirement. In the Austrian market, trust is built through quality and reliability."
          </p>
        </div>
      </section>

      {/* Legacy/Trust Section */}
      <section className="bg-bg-light-secondary py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionBadge>The Studio</SectionBadge>
          <h2 className="tracking-tightest mb-10 leading-tight">Crafting Digital Legacies.</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-10">
            Lovable Website is more than a service provider. We are long-term strategic partners for brands that value excellence. Our methodology combines Viennese aesthetic heritage with cutting-edge global technology standards.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            <div className="group">
              <div className="text-3xl md:text-5xl font-bold mb-2 group-hover:text-accent-green-deep transition-colors">5+</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">Years of Craft</div>
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
