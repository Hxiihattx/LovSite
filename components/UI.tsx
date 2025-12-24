
import React from 'react';
import { Link } from 'react-router-dom';

// Scribble Heart SVG Component matching the user's provided doodle
export const ScribbleHeart = ({ color = "currentColor", className = "" }: { color?: string, className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M50 85c-1.5 0-3-.5-4.2-1.6C34.5 73.2 24.3 64.3 17.5 56.4 10.7 48.5 7 40.8 7 33.5c0-12.4 10.1-22.5 22.5-22.5 6.7 0 12.8 3 17 8.1 1.5 1.8 3 3.9 3.5 4.6.5-.7 2-2.8 3.5-4.6 4.2-5.1 10.3-8.1 17-8.1 12.4 0 22.5 10.1 22.5 22.5 0 7.3-3.7 15-10.5 22.9-6.8 7.9-17 16.8-28.3 27-1.2 1.1-2.7 1.6-4.2 1.6z" 
      fill={color}
    />
    <path 
      d="M32 25c-2 0-4 2-4 4s2 4 4 4 4-2 4-4-2-4-4-4zm36 0c-2 0-4 2-4 4s2 4 4 4 4-2 4-4-2-4-4-4z" 
      fill="white" 
      fillOpacity="0.1"
    />
    <path d="M25 35l10 10M65 35l10 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.2"/>
  </svg>
);

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'inverse';
  className?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  to, 
  variant = 'primary', 
  className = '', 
  type = 'button',
  onClick 
}) => {
  const baseStyles = "rounded-full px-8 py-3 text-sm font-medium tracking-wide transition-all duration-300 transform active:translate-y-0 inline-flex items-center justify-center whitespace-nowrap";
  
  const variants = {
    primary: "bg-black text-white hover:-translate-y-0.5 hover:shadow-lg",
    inverse: "bg-white text-black hover:-translate-y-0.5 hover:shadow-lg",
    secondary: "bg-transparent text-black underline underline-offset-4 font-semibold px-0 py-0",
    ghost: "bg-transparent text-black border border-black/20 hover:border-black transition-colors"
  };

  if (to) {
    return (
      <Link to={to} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {children}
        {variant === 'secondary' && <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export const SectionBadge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="uppercase tracking-[0.1em] text-xs font-bold text-gray-500 mb-4 block">
    {children}
  </span>
);

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { label: string }> = ({ label, ...props }) => (
  <div className="mb-6">
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input 
      {...props}
      className="w-full bg-transparent border-b border-gray-300 py-4 text-lg text-black placeholder-gray-400 focus:border-black focus:outline-none transition-colors duration-200"
    />
  </div>
);

export const FeatureCard: React.FC<{ title: string, text: string, link: string }> = ({ title, text, link }) => (
  <Link to={link} className="group bg-white rounded-xl p-8 border border-transparent hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600 mb-6">{text}</p>
    <div className="flex items-center text-sm font-semibold group-hover:underline">
      Learn More <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
    </div>
  </Link>
);

interface CaseStudyCardProps {
  label: string;
  challenge: string;
  impact: React.ReactNode;
  bgColor?: string;
  icon?: React.ReactNode;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ label, challenge, impact, bgColor = 'bg-accent-green-deep', icon }) => (
  <div className={`w-full md:min-w-[480px] snap-center ${bgColor} rounded-2xl p-6 md:p-10 text-white flex flex-col justify-between min-h-[500px] md:min-h-[580px] transition-transform duration-300 hover:scale-[1.01]`}>
    <div className="flex flex-col items-center text-center">
      <div className="w-12 h-12 mb-6 md:mb-8 opacity-90 flex items-center justify-center text-3xl">
        {icon || "◈"}
      </div>
      <span className="uppercase tracking-widest text-[10px] font-bold opacity-60 mb-2">{label}</span>
      <div className="w-full border-b border-white/10 my-4 md:my-6"></div>
      
      <div className="text-left w-full space-y-6 md:space-y-8">
        <div>
          <h4 className="font-bold text-base mb-2 md:mb-3 opacity-90 tracking-wide uppercase text-[12px]">Challenge</h4>
          <p className="text-white/70 text-sm leading-relaxed font-light line-clamp-4">{challenge}</p>
        </div>
        <div>
          <h4 className="font-bold text-base mb-2 md:mb-3 opacity-90 tracking-wide uppercase text-[12px]">Impact</h4>
          <div className="text-white/70 text-sm leading-relaxed font-light">
            {impact}
          </div>
        </div>
      </div>
    </div>
    
    <div className="mt-8 md:mt-auto">
      <Link to="/portfolio" className="w-full bg-white/10 hover:bg-white/20 border border-white/10 py-4 rounded-full text-sm font-medium transition-all text-center block group">
        Learn More <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
      </Link>
    </div>
  </div>
);

export const InsightCard: React.FC<{ title: string, text: string, img: string }> = ({ title, text, img }) => (
  <div className="w-full md:min-w-[400px] group cursor-pointer">
    <div className="aspect-video rounded-xl overflow-hidden mb-6">
      <img src={img} alt={title} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />
    </div>
    <h4 className="text-base md:text-lg font-bold mb-2 group-hover:underline underline-offset-4 decoration-1 line-clamp-2">{title}</h4>
    <p className="text-xs md:text-sm text-gray-500 line-clamp-2 leading-relaxed">{text}</p>
  </div>
);
