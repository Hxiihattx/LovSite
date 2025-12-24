
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, FeatureCard, CaseStudyCard, SectionBadge, InsightCard } from '../components/UI';

const Home: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const testimonialScrollRef = useRef<HTMLDivElement>(null);

  const scroll = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    if (ref.current) {
      const { scrollLeft, clientWidth } = ref.current;
      ref.current.scrollTo({ left: direction === 'left' ? scrollLeft - (clientWidth * 0.8) : scrollLeft + (clientWidth * 0.8), behavior: 'smooth' });
    }
  };

  const caseStudies = [
    { 
      label: "Hospitality • Boutique Hotel Vienna", 
      bgColor: "bg-accent-green-deep",
      icon: "⚪",
      challenge: "Legacy booking systems were hindering direct conversion rates, forcing dependence on high-commission platforms.",
      impact: <p>Redesigned entire journey, resulting in a <span className="font-bold text-white">40% increase in direct bookings</span>.</p>
    },
    { 
      label: "FinTech • Nordexa B2B App", 
      bgColor: "bg-[#3D4C44]",
      icon: "◇",
      challenge: "Complex financial data visualization was causing user churn during critical onboarding phases.",
      impact: <p>Streamlined UI led to a successful <span className="font-bold text-white">Series A funding round</span>.</p>
    },
    { 
      label: "Social • High-end Fashion", 
      bgColor: "bg-[#4A5550]",
      icon: "△",
      challenge: "A new label needed a premium presence in a saturated digital market dominated by fast-fashion noise.",
      impact: <p>Cohesive visual identity garnered <span className="font-bold text-white">10k organic followers</span> in 30 days.</p>
    },
    { 
      label: "Real Estate • Vienna Living", 
      bgColor: "bg-[#2D3E33]",
      icon: "⌂",
      challenge: "Outdated property listings were failing to capture the luxury essence of high-value Vienna real estate.",
      impact: <p>New immersive VR integration led to <span className="font-bold text-white">3x more viewing requests</span> per month.</p>
    },
    { 
      label: "Legal • Dr. Wagner & Partner", 
      bgColor: "bg-[#1E2E2A]",
      icon: "⚖",
      challenge: "Difficulty communicating complex legal services to a younger entrepreneurial audience.",
      impact: <p>Content strategy and clean UI simplified service tiers, increasing <span className="font-bold text-white">lead quality by 65%</span>.</p>
    }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section id="hero-section" className="relative h-screen min-h-[900px] md:min-h-[700px] bg-[#0a0a0a] overflow-hidden flex flex-col justify-end">
        <div className="absolute inset-0 z-0 h-full">
            <img 
                src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=40&w=2000" 
                className="w-full h-full object-cover grayscale opacity-40 md:opacity-40" 
                alt="Vienna Urban Scenery"
                loading="eager"
            />
            <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent"></div>
            {/* Mobile overlay removed as requested */}
        </div>
        
        <div className="hidden md:flex relative z-10 max-w-7xl mx-auto px-12 w-full text-left items-center h-full">
          <div className="max-w-2xl">
            <h1 className="home-hero-h1 tracking-tightest text-white leading-[1.05] mb-8 animate-fade-in-up">
              Digital Excellence for Austrian Business.
            </h1>
            <p className="text-base text-white/70 max-w-lg leading-relaxed mb-12 font-normal opacity-0 animate-fade-in-up delay-200" style={{ animationFillMode: 'forwards' }}>
              We combine Viennese aesthetics with strategic functionality. High-end, GDPR-compliant websites designed to lead your industry.
            </p>
            <div className="flex items-center gap-5 opacity-0 animate-fade-in-up delay-300" style={{ animationFillMode: 'forwards' }}>
              <Button to="/booking" variant="inverse" className="px-10 py-4 text-[14px] font-semibold tracking-wide transition-all hover:bg-white/90">
                Book Consultation
              </Button>
              <Button to="/portfolio" variant="ghost" className="px-10 py-4 text-[14px] font-semibold tracking-wide border-white/20 text-white hover:border-white hover:bg-white/5">
                View Work
              </Button>
            </div>
          </div>
        </div>

        <div className="md:hidden relative z-10 w-full">
          <div className="bg-white rounded-t-[32px] p-8 pb-12 shadow-2xl flex flex-col">
            <SectionBadge>Vienna Digital Studio</SectionBadge>
            <h1 className="home-hero-h1 tracking-tight text-black leading-tight mb-6">
              Digital Excellence for Austrian Business.
            </h1>
            <p className="text-gray-500 text-base leading-[1.6] mb-10 font-medium">
              Viennese aesthetics meet strategic functionality for high-performing digital assets that inspire trust.
            </p>
            
            <div className="flex flex-col gap-4 mb-8">
              <Button to="/booking" className="w-full py-5 rounded-full text-sm font-semibold">
                Schedule Consultation
              </Button>
              <Button to="/portfolio" variant="ghost" className="w-full py-5 rounded-full text-sm font-semibold border-gray-200">
                Browse Projects
              </Button>
            </div>

            <div className="text-center">
              <span className="text-[10px] font-bold tracking-widest text-black opacity-40 uppercase">
                Premium Digital Agency • 1220 Wien
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Value Grid */}
      <section id="value-prop" className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="tracking-tightest text-black mb-16">
            Our value, your advantage
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
            <div className="flex gap-4 items-start">
              <div className="shrink-0 mt-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="1" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="1" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="23" y2="12"/></svg>
              </div>
              <div>
                <h3 className="font-bold text-[15px] leading-tight mb-2">Conversion-first design</h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  We align every design decision with your broader business strategy to ensure practical, measurable growth.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="shrink-0 mt-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <div>
                <h3 className="font-bold text-[15px] leading-tight mb-2">Austrian legal expertise</h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  Our team ensures full DSGVO/GDPR compliance across your digital assets, helping you navigate complex local regulations.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="shrink-0 mt-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div>
                <h3 className="font-bold text-[15px] leading-tight mb-2">Proven content results</h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  With successful social campaigns and viral content strategies, we deliver consistent community growth and brand authority.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="shrink-0 mt-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div>
                <h3 className="font-bold text-[15px] leading-tight mb-2">Trusted premium partner</h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  Leading Austrian businesses rely on us as their long-term advisors for mission-critical digital and creative decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-white py-24 md:py-40 border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="reveal">
            <SectionBadge>The Edge</SectionBadge>
            <h2 className="tracking-tightest mb-8 leading-tight">Digital Craft. Austrian Precision.</h2>
            <p className="text-base text-gray-500 leading-relaxed mb-12 max-w-lg">
              We focus on high-impact digital solutions that move the needle for Austrian brands. Every project is handled with precision and a commitment to quality.
            </p>
            <Link to="/about" className="premium-link text-xs font-bold uppercase tracking-widest text-black">Learn our story</Link>
          </div>
          <div className="grid grid-cols-2 gap-4 reveal delay-200">
            <div className="bg-bg-light-secondary rounded-2xl p-10 flex flex-col justify-center border border-gray-100 hover:bg-white hover:shadow-xl transition-all">
              <span className="text-4xl font-bold mb-2">5+</span>
              <span className="text-[10px] uppercase tracking-widest font-bold opacity-40">Years Studio</span>
            </div>
            <div className="bg-accent-green-deep text-white rounded-2xl p-10 flex flex-col justify-center shadow-2xl">
              <span className="text-4xl font-bold mb-2">50+</span>
              <span className="text-[10px] uppercase tracking-widest font-bold opacity-40 text-white/50">Successes</span>
            </div>
            <div className="bg-bg-light-secondary rounded-2xl p-10 flex flex-col justify-center border border-gray-100 hover:bg-white hover:shadow-xl transition-all">
              <span className="text-4xl font-bold mb-2">100%</span>
              <span className="text-[10px] uppercase tracking-widest font-bold opacity-40">DSGVO Secure</span>
            </div>
            <div className="bg-bg-light-secondary rounded-2xl p-10 flex flex-col justify-center border border-gray-100 hover:bg-white hover:shadow-xl transition-all">
              <span className="text-4xl font-bold mb-2">∞</span>
              <span className="text-[10px] uppercase tracking-widest font-bold opacity-40">Quality Level</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-split" className="bg-bg-light-secondary py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/3 md:sticky md:top-32 h-fit">
            <h2 className="tracking-tightest leading-none mb-6">Our Core Expertise.</h2>
            <p className="text-gray-600 text-base leading-relaxed max-w-xs">We focus on high-impact digital solutions that move the needle for Austrian brands.</p>
            <div className="mt-10">
                <Button to="/booking" variant="ghost">Book Discovery Session</Button>
            </div>
          </div>
          <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureCard title="Website Design" text="Custom Webflow & WordPress solutions built with Viennese precision and DSGVO safety." link="/web-design" />
            <FeatureCard title="Content Design" text="Strategic visual content and B2B LinkedIn management for premium Austrian brands." link="/social-media" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-24 md:py-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-row justify-between items-end mb-16 md:mb-20 reveal">
            <div>
              <SectionBadge>Trusted Partners</SectionBadge>
              <h2 className="tracking-tightest leading-tight">What our clients say.</h2>
            </div>
            <div className="flex gap-2">
              <button onClick={() => scroll(testimonialScrollRef, 'left')} className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">←</button>
              <button onClick={() => scroll(testimonialScrollRef, 'right')} className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">→</button>
            </div>
          </div>
          
          <div 
            ref={testimonialScrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 pb-4"
          >
            {[
              { q: "Lovable Website transformed our digital footprint. Their attention to detail and compliance is unmatched.", n: "Klaus M., Vienna" },
              { q: "High-end design that actually converts. Ihtasham's strategy helped us scale our B2B presence.", n: "Sophie H., Salzburg" },
              { q: "A professional partner that understands the Austrian market perfectly. Precise and creative.", n: "Stefan B., Graz" }
            ].map((test, idx) => (
              <div 
                key={idx} 
                className="min-w-[85vw] max-w-[85vw] md:min-w-0 md:max-w-none shrink-0 snap-center bg-bg-light-secondary p-10 rounded-3xl reveal flex flex-col justify-between" 
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div>
                  <div className="text-3xl mb-6 opacity-20">"</div>
                  <p className="text-base text-gray-700 leading-relaxed mb-10 italic">{test.q}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{test.n}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Works Slider */}
      <section id="work-slider" className="bg-white pb-20 md:pb-32 overflow-hidden border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-row justify-between items-end">
          <div>
            <SectionBadge>Success Stories</SectionBadge>
            <h2 className="tracking-tightest">Selected Works.</h2>
          </div>
          <div className="flex gap-2">
            <button onClick={() => scroll(scrollRef, 'left')} className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">←</button>
            <button onClick={() => scroll(scrollRef, 'right')} className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">→</button>
          </div>
        </div>

        <div ref={scrollRef} className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8">
          <div className="flex flex-nowrap gap-4 md:gap-8 px-6 md:pl-[calc((100vw-80rem)/2+26.6rem)]">
            {caseStudies.map((cs, idx) => (
              <div key={idx} className="w-[85vw] md:w-auto shrink-0 snap-center">
                <CaseStudyCard {...cs} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta-footer" className="bg-bg-light-secondary py-24 md:py-40 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="tracking-tightest leading-none mb-10">Crafting your digital legacy.</h2>
          <p className="text-base md:text-xl text-gray-500 mb-12 max-w-xl mx-auto font-medium">Partner with Ihtasham and the team to build a presence that inspires.</p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Button to="/booking" className="px-12 py-5 text-lg shadow-2xl">Book Consultation</Button>
            <Button to="/portfolio" variant="ghost" className="px-12 py-5 text-lg border-gray-200">View Portfolio</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
