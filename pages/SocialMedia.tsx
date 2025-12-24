
import React from 'react';
import { Button, SectionBadge } from '../components/UI';

const SocialMedia: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="bg-bg-dark-primary pt-24 md:pt-40 pb-20 md:pb-24 text-center text-white">
        <div className="max-w-4xl mx-auto px-6">
          <SectionBadge>Social Influence</SectionBadge>
          <h1 className="tracking-tightest mb-8 leading-tight animate-fade-in-up">Content That Builds Community.</h1>
          <p className="text-base text-gray-400 max-w-2xl mx-auto animate-fade-in-up delay-200" style={{ animationFillMode: 'forwards', opacity: 0 }}>
            Capturing attention in a world of noise. We design high-performance social ecosystems that build real, loyal communities in Vienna and beyond.
          </p>
          <div className="mt-12 animate-fade-in-up delay-300 opacity-0" style={{ animationFillMode: 'forwards' }}>
            <Button to="/booking" variant="inverse">Book Consultation</Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-32">
            <div className="p-10 bg-bg-light-secondary rounded-3xl hover:-translate-y-2 transition-transform duration-500">
              <div className="text-5xl mb-6">🎥</div>
              <h3 className="font-bold text-xl mb-4 tracking-tight">Short-Form Video</h3>
              <p className="text-base text-gray-500 leading-relaxed">High-end production of Instagram Reels and TikToks that blend cinema quality with organic engagement.</p>
            </div>
            <div className="p-10 bg-bg-light-secondary rounded-3xl hover:-translate-y-2 transition-transform duration-500">
              <div className="text-5xl mb-6">💼</div>
              <h3 className="font-bold text-xl mb-4 tracking-tight">LinkedIn B2B</h3>
              <p className="text-base text-gray-500 leading-relaxed">Thought leadership and executive branding for Vienna's corporate landscape, designed to convert professionals.</p>
            </div>
            <div className="p-10 bg-bg-light-secondary rounded-3xl hover:-translate-y-2 transition-transform duration-500">
              <div className="text-5xl mb-6">📈</div>
              <h3 className="font-bold text-xl mb-4 tracking-tight">Growth Strategy</h3>
              <p className="text-base text-gray-500 leading-relaxed">Not just posting—we engineer content pillars and data-driven engagement to scale your brand footprint.</p>
            </div>
          </div>

          <div className="bg-bg-dark-primary text-white rounded-[40px] p-8 md:p-20 flex flex-col md:flex-row items-center gap-16 overflow-hidden">
            <div className="w-full md:w-1/2 relative z-10">
              <SectionBadge>The Edge</SectionBadge>
              <h2 className="tracking-tightest mb-8">Storytelling with Intent.</h2>
              <p className="text-base text-gray-400 leading-relaxed mb-8">
                Social media is no longer about just "posting." It's about storytelling that aligns with your brand's heritage. We work with specialized creators in Vienna to produce bespoke assets that can't be found anywhere else.
              </p>
              <p className="text-base text-gray-400 leading-relaxed">
                From luxury hospitality to boutique retail, we tailor our visual language to match the tone and expectations of your specific niche in the DACH market.
              </p>
            </div>
            <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-2xl scale-110 rotate-3">
              <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=40&w=1200" alt="Social Media Strategy" className="w-full grayscale brightness-75 transition-all duration-700 hover:grayscale-0 hover:brightness-100" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-32 text-center border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="tracking-tightest mb-10 leading-tight">Ready to stop the scroll?</h2>
          <p className="text-base text-gray-500 mb-12 max-w-xl mx-auto">We help premium brands start the conversation and build meaningful digital communities.</p>
          <Button to="/booking" className="px-16 py-5 text-lg">Discuss Your Content</Button>
        </div>
      </section>
    </div>
  );
};

export default SocialMedia;
