
import React, { useState, useEffect, useRef } from 'react';
import { ScribbleHeart } from './UI';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [displayProgress, setDisplayProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  
  const DURATION = 2000; // Total duration in milliseconds

  useEffect(() => {
    const animate = (time: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = time;
      }

      const elapsed = time - startTimeRef.current;
      const progress = Math.min((elapsed / DURATION) * 100, 100);
      
      setDisplayProgress(progress);

      if (progress < 100) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        // Animation complete
        setTimeout(() => {
          setIsExiting(true);
          // Allow for the slide-up animation (1000ms in CSS) to complete before unmounting
          setTimeout(onComplete, 1000);
        }, 300);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isExiting ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      {/* Central Content Stack */}
      <div className="flex flex-col items-center">
        <div className={`transition-all duration-700 transform ${displayProgress > 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <ScribbleHeart color="black" className="w-16 h-16 md:w-20 md:h-20 mb-6 animate-pulse" />
        </div>
        
        <div className="overflow-hidden mb-8 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tightest">
            Lovable Website.
          </h2>
        </div>

        {/* Mobile-Only Progress Indicator (directly under logo/text) */}
        <div className="md:hidden flex flex-col items-center w-full max-w-[160px]">
          <div className="w-full h-[1px] bg-gray-100 relative mb-4">
            <div 
              className="h-full bg-black transition-all duration-75 ease-linear"
              style={{ width: `${displayProgress}%` }}
            />
          </div>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/40 tabular-nums">
            {Math.floor(displayProgress)}%
          </span>
        </div>
      </div>

      {/* Desktop-Only Progress Indicator (Fixed bottom layout) */}
      <div className="hidden md:block">
        <div className="fixed bottom-12 right-12 overflow-hidden">
          <span className="block text-[10px] font-bold tracking-[0.2em] uppercase text-black/40 tabular-nums">
            {Math.floor(displayProgress)}%
          </span>
        </div>

        <div className="fixed bottom-0 left-0 w-full h-[1px] bg-gray-100">
          <div 
            className="h-full bg-black transition-all duration-75 ease-linear"
            style={{ width: `${displayProgress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
