
import React from 'react';
import { Link } from 'react-router-dom';
import { SectionBadge, Button } from '../components/UI';

export const INSIGHTS_DATA = [
  {
    slug: "speed-currency-austrian-seo",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=60&w=1200",
    title: "Why speed is the new currency for Austrian SEO",
    category: "Performance",
    text: "Exploring how Core Web Vitals impact rankings in the local Google.at market."
  },
  {
    slug: "instagram-reels-vienna",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=60&w=1200",
    title: "Mastering Instagram Reels for Viennese Brands",
    category: "Social Media",
    text: "A guide to short-form video strategy that captures the attention of the modern consumer."
  },
  {
    slug: "gdpr-checklist-2025",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=60&w=1200",
    title: "GDPR Checklist 2025: Is your site compliant?",
    category: "Legal",
    text: "From cookie-less tracking to font hosting — what every Austrian business owner needs to know."
  },
  {
    slug: "minimal-typography-luxury",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=60&w=1200",
    title: "The rise of minimal typography in luxury brands",
    category: "Design",
    text: "How stripping away the noise creates more impact for high-end digital products."
  },
  {
    slug: "ecommerce-trends-dach-2025",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=60&w=1200",
    title: "E-commerce Trends in DACH: What's next?",
    category: "Strategy",
    text: "The shift towards hyper-local delivery and personalized shopping experiences."
  },
  {
    slug: "austrian-made-digital",
    img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=60&w=1200",
    title: "The value of 'Austrian-Made' digital products",
    category: "Business",
    text: "Why local craftsmanship in code and design matters more than ever in 2025."
  }
];

const Insights: React.FC = () => {
  return (
    <div className="pt-32 md:pt-48 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:mb-20 text-center">
          <SectionBadge>Our Thoughts</SectionBadge>
          <h1 className="tracking-tightest mb-8">Digital Insights.</h1>
          <p className="text-base md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            We explore technology and design strategy specifically for the Austrian and DACH regions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-24">
          {INSIGHTS_DATA.map((art) => (
            <div key={art.slug} className="group flex flex-col h-full">
              <Link to={`/insights/${art.slug}`} className="block aspect-video rounded-2xl overflow-hidden mb-8 relative shadow-sm">
                <img 
                  src={art.img} 
                  alt={art.title} 
                  loading="lazy"
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-black shadow-sm">
                  {art.category}
                </div>
              </Link>
              
              <Link to={`/insights/${art.slug}`} className="block group-hover:text-accent-green-deep transition-colors">
                <h2 className="text-xl md:text-3xl font-bold mb-4 tracking-tight leading-tight">
                  {art.title}
                </h2>
              </Link>
              
              <p className="text-sm md:text-lg text-gray-500 leading-relaxed mb-8 flex-grow">
                {art.text}
              </p>
              
              <div className="mt-auto">
                <Link to={`/insights/${art.slug}`} className="inline-flex items-center text-xs md:text-sm font-bold uppercase tracking-widest group/btn border-b border-transparent hover:border-black pb-1 transition-all">
                  Read Article 
                  <span className="ml-2 transition-transform group-hover/btn:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 pt-20 border-t border-gray-100 text-center">
          <h3 className="text-xl md:text-3xl font-bold mb-8">Stay updated with our newsletter.</h3>
          <div className="max-w-md mx-auto flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow bg-gray-50 border-b border-gray-300 py-3 px-4 focus:outline-none focus:border-black transition-colors"
            />
            <Button variant="primary">Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
