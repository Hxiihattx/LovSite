
import React from 'react';
import { Button, SectionBadge } from '../components/UI';

const WebDesign: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="bg-bg-dark-primary pt-24 md:pt-40 pb-20 md:pb-24 text-center text-white">
        <div className="max-w-4xl mx-auto px-6">
          <SectionBadge>Premium Expertise</SectionBadge>
          <h1 className="tracking-tightest mb-8 leading-tight animate-fade-in-up">Websites Engineered for Impact.</h1>
          <p className="text-base text-gray-400 max-w-2xl mx-auto animate-fade-in-up delay-200" style={{ animationFillMode: 'forwards', opacity: 0 }}>
            High-end architecture meets Austrian legal precision. We build digital homes that are as secure as they are beautiful.
          </p>
          <div className="mt-12 animate-fade-in-up delay-300 opacity-0" style={{ animationFillMode: 'forwards' }}>
            <Button to="/booking" variant="inverse">Book Consultation</Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
            <div>
              <SectionBadge>The Foundation</SectionBadge>
              <h2 className="tracking-tightest mb-8">Strategy-First Digital Design.</h2>
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                Most agencies start with colors and fonts. We start with your business model. We analyze user flows, heatmaps, and local competitor landscapes in Vienna and beyond to ensure every pixel serves a purpose.
              </p>
              <p className="text-base text-gray-500 leading-relaxed mb-8">
                Our approach ensures that your website isn't just a brochure, but a high-converting machine that works 24/7 to grow your authority in the Austrian market.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-sm font-bold tracking-tight">
                  <span className="w-2 h-2 rounded-full bg-accent-green-deep"></span> Conversion-focused layouts
                </li>
                <li className="flex items-center gap-4 text-sm font-bold tracking-tight">
                  <span className="w-2 h-2 rounded-full bg-accent-green-deep"></span> Mobile-first responsive architecture
                </li>
                <li className="flex items-center gap-4 text-sm font-bold tracking-tight">
                  <span className="w-2 h-2 rounded-full bg-accent-green-deep"></span> Ultra-High Performance SEO
                </li>
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl group">
              <img src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=50&w=1200" alt="UX Design Process" className="w-full grayscale transition-all duration-700 group-hover:grayscale-0 scale-105 group-hover:scale-100" loading="lazy" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-2xl group">
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=50&w=1200" alt="Development Code" className="w-full grayscale transition-all duration-700 group-hover:grayscale-0 scale-105 group-hover:scale-100" loading="lazy" />
            </div>
            <div className="order-1 md:order-2">
              <SectionBadge>Execution</SectionBadge>
              <h2 className="tracking-tightest mb-8">Secure Code. Zero Compromise.</h2>
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                Our development team utilizes the latest in headless technology, Webflow, and custom CMS structures to give you a site that is fast, editable, and future-proof.
              </p>
              <p className="text-base text-gray-500 leading-relaxed">
                Crucially, we handle the technical side of the DSGVO/GDPR. From cookie-less analytics to self-hosting fonts on Austrian servers, we ensure your site is a safe haven for your user's data.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg-light-secondary py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionBadge>A Journey to Excellence</SectionBadge>
            <h2 className="tracking-tightest mb-4">Our Proven Process.</h2>
          </div>
          <div className="space-y-16 mt-12 relative">
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-gray-200"></div>
            {[
              { id: '01', title: 'Discovery & Analytics', desc: 'Detailed analysis of your target market, competitors, and business objectives.' },
              { id: '02', title: 'UX Architecture', desc: 'Blueprint of the user journey to ensure intuitive navigation and high conversion rates.' },
              { id: '03', title: 'Aesthetic Realization', desc: 'Crafting the unique visual language that defines your brand in the digital realm.' },
              { id: '04', title: 'Secure Development', desc: 'Clean, efficient coding with integrated legal compliance features and speed optimization.' },
              { id: '05', title: 'Deployment & Scaling', desc: 'Go-live with ongoing performance monitoring and strategic growth support.' }
            ].map((step) => (
              <div key={step.id} className="relative flex gap-10 md:gap-20 items-start group">
                <div className="text-5xl md:text-7xl font-bold text-gray-200 hidden md:block w-24 shrink-0 group-hover:text-black transition-colors">{step.id}</div>
                <div className="md:pt-6">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 tracking-tight">{step.title}</h3>
                  <p className="text-base text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-32 text-center border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="tracking-tightest mb-10 leading-tight">Your digital legacy starts here.</h2>
          <p className="text-base text-gray-500 mb-12 max-w-xl mx-auto">We specialize in turning static business ideas into dynamic digital powerhouses for the Austrian market.</p>
          <Button to="/booking" className="px-16 py-5 text-lg">Discuss Your Website</Button>
        </div>
      </section>
    </div>
  );
};

export default WebDesign;
