
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, ScribbleHeart } from './UI';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsDrawerOpen(false);
    document.body.style.overflow = '';
  }, [location]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    document.body.style.overflow = !isDrawerOpen ? 'hidden' : '';
  };

  const isHome = location.pathname === '/';
  
  // Header styling
  const headerTextColor = !isScrolled && isHome ? 'text-white' : 'text-black';
  const headerBgColor = !isScrolled && isHome ? 'bg-transparent' : 'bg-white shadow-sm';
  const logoIconColor = !isScrolled && isHome ? 'white' : 'black';

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${headerBgColor}`}>
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className={`flex items-center gap-3 text-2xl font-medium tracking-tightest hover:opacity-80 transition-opacity ${headerTextColor}`}>
            <ScribbleHeart color={logoIconColor} className="w-8 h-8" />
            <span>Lovable Website.</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center">
            <ul className={`flex items-center gap-7 text-[12px] font-medium tracking-wide ${headerTextColor}`}>
              <li><Link to="/" className="hover:opacity-60 transition-opacity">Home</Link></li>
              <li><Link to="/about" className="hover:opacity-60 transition-opacity">About</Link></li>
              <li><Link to="/web-design" className="hover:opacity-60 transition-opacity">Website Design</Link></li>
              <li><Link to="/social-media" className="hover:opacity-60 transition-opacity">Content Design</Link></li>
              <li><Link to="/portfolio" className="hover:opacity-60 transition-opacity">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:opacity-60 transition-opacity">Contact</Link></li>
              <li><Link to="/faq" className="hover:opacity-60 transition-opacity">FAQ</Link></li>
            </ul>
          </div>
          
          <button onClick={toggleDrawer} className={`md:hidden ${headerTextColor} p-2`}>
            <svg className="w-8 h-4" viewBox="0 0 32 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H32" stroke="currentColor" strokeWidth="2"/>
              <path d="M0 11H32" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <aside className={`fixed inset-0 z-[60] bg-white transform transition-transform duration-500 ease-in-out ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="relative h-full flex flex-col px-8 pt-6 pb-12 overflow-y-auto">
          <div className="flex justify-between items-center mb-16">
            <Link to="/" className="flex items-center gap-3 text-black text-2xl font-medium tracking-tightest">
              <ScribbleHeart color="black" className="w-8 h-8" />
              <span>Lovable Website.</span>
            </Link>
            <button onClick={toggleDrawer} className="text-black p-2">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-5 mb-12">
            <Link to="/" className="text-3xl font-bold text-black tracking-tightest">Home</Link>
            <Link to="/about" className="text-3xl font-bold text-black tracking-tightest">About</Link>
            <Link to="/web-design" className="text-3xl font-bold text-black tracking-tightest">Website Design</Link>
            <Link to="/social-media" className="text-3xl font-bold text-black tracking-tightest">Content Design</Link>
            <Link to="/portfolio" className="text-3xl font-bold text-black tracking-tightest">Portfolio</Link>
            <Link to="/contact" className="text-3xl font-bold text-black tracking-tightest">Contact</Link>
            <Link to="/faq" className="text-3xl font-bold text-black tracking-tightest">FAQ</Link>
          </nav>

          <div className="space-y-6 mb-12">
            <div className="text-black font-medium text-sm">
              <p>+43 (0) 660 4567098</p>
              <p>hi@lovablewebsite.com</p>
            </div>
            <div className="text-gray-500 text-[11px] leading-relaxed">
              <p className="font-bold text-gray-700 mb-1">Vienna Office</p>
              <p>Tokiostrasse 12/2, 1220 Wien</p>
            </div>
          </div>

          <Button to="/booking" className="w-full mt-auto">Book Consultation</Button>
        </div>
      </aside>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-bg-dark-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center gap-3 text-2xl font-medium tracking-tightest mb-6 block">
                <ScribbleHeart color="white" className="w-8 h-8" />
                <span>Lovable Website.</span>
              </Link>
              <p className="text-gray-400 mb-8 leading-relaxed text-sm max-w-xs">
                Premium digital craftsmanship for the Austrian market. We build legacies, not just websites.
              </p>
              <div className="flex gap-4 text-[10px] font-bold tracking-widest uppercase text-white/40">
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-[11px] uppercase tracking-[0.2em] mb-8 text-white/30">Explore</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><Link to="/web-design" className="hover:text-white transition-colors">Website Design</Link></li>
                <li><Link to="/social-media" className="hover:text-white transition-colors">Content Design</Link></li>
                <li><Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
                <li><Link to="/insights" className="hover:text-white transition-colors">Agency Insights</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[11px] uppercase tracking-[0.2em] mb-8 text-white/30">Connect</h4>
              <p className="text-gray-400 leading-relaxed mb-4 text-sm">
                Tokiostrasse 12/2<br />
                1220 Wien, Austria
              </p>
              <p className="text-gray-400 text-sm">
                hi@lovablewebsite.com<br />
                0660 4567098
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[11px] uppercase tracking-[0.2em] mb-8 text-white/30">Compliance</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><Link to="/impressum" className="hover:text-white transition-colors">Impressum</Link></li>
                <li><Link to="/datenschutz" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/agb" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-[9px] uppercase tracking-[0.2em] text-gray-600">
              © 2025 Lovable Website. Vienna, Austria.
            </div>
            <div className="text-[9px] uppercase tracking-[0.2em] text-gray-600">
              Designed with precision by Ihtasham Manzoor
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
