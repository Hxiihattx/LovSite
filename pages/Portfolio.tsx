
import React, { useState } from 'react';
import { SectionBadge } from '../components/UI';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    { id: 1, title: 'Hotel Sacher Concept', category: 'Website Design', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=40&w=800' },
    { id: 2, title: 'FinTech LinkedIn Campaign', category: 'Content Design', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=40&w=800' },
    { id: 3, title: 'Bakery Rebrand', category: 'Content Design', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=40&w=800' },
    { id: 4, title: 'Boutique Vienna', category: 'Website Design', img: 'https://images.unsplash.com/photo-1555633514-abcee6ad93e1?auto=format&fit=crop&q=40&w=800' },
    { id: 5, title: 'Tech Hub Content', category: 'Content Design', img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=40&w=800' },
    { id: 6, title: 'Artisan Workshop', category: 'Website Design', img: 'https://images.unsplash.com/photo-1513519245088-0e12902e35a6?auto=format&fit=crop&q=40&w=800' }
  ];

  const categories = ['All', 'Website Design', 'Content Design'];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="pt-32 md:pt-48 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-20">
          <SectionBadge>Our Work</SectionBadge>
          <h1 className="tracking-tightest mb-6">A curated digital portfolio.</h1>
          <p className="text-sm md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">Strategic products built to scale within the Austrian digital landscape.</p>
        </div>

        {/* Filter Bar */}
        <div className="flex overflow-x-auto scrollbar-hide gap-3 mb-16 pb-4 md:justify-center -mx-6 px-6 md:mx-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-6 py-2.5 text-xs font-medium transition-all duration-300 border whitespace-nowrap shrink-0 ${
                filter === cat ? 'bg-black text-white border-black shadow-lg' : 'bg-transparent text-gray-600 border-gray-300 hover:border-black hover:text-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 transition-all duration-500">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6 relative shadow-sm">
                <img 
                  src={project.img} 
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-baseline px-1">
                <h3 className="text-lg md:text-xl font-bold tracking-tight">{project.title}</h3>
                <span className="text-[9px] text-gray-400 uppercase tracking-widest font-bold">{project.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
