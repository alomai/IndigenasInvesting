'use client';

import './gentrification.css';
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';

export default function Gentrification() {
  const t = useTranslations('gentrification');
  const [showPopup, setShowPopup] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Detect desktop or mobile based on window width
    function handleResize() {
      setIsDesktop(window.innerWidth >= 768); // md breakpoint in Tailwind
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // On mobile, show popup after 1 second
    if (!isDesktop) {
      const timeout = setTimeout(() => setShowPopup(true), 1000);
      return () => clearTimeout(timeout);
    }
  }, [isDesktop]);

  // Desktop: show popup on hover by setting state on mouse events
  function handleMouseEnter() {
    if (isDesktop) setShowPopup(true);
  }
  function handleMouseLeave() {
    if (isDesktop) setShowPopup(false);
  }

  return (
    <section
      className="relative w-full min-h-[500px] flex items-start pt-16 sm:pt-20 md:pt-28"
      style={{
        backgroundImage: "url('/gentrification/puerto-rico-gentrification.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Light overlay */}
      <div className="absolute inset-0 bg-white/20"></div>

      {/* Content wrapper */}
      <div className="relative z-10 w-full px-6 sm:px-10 md:px-16 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-10">
        
        {/* Left text */}
        <div className="md:w-1/2">
          {/* Important: position relative to contain absolute popup */}
          <h2
  className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-8 sm:mb-10 md:mb-14"
  style={{ position: 'relative', display: 'inline-block' }} // container for absolute popup
>
  <span
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    style={{
      cursor: isDesktop ? 'pointer' : 'default',
      textDecoration: 'none', // no underline at all
    }}
  >
    {t('title.line1')}
  </span>

  {showPopup && isDesktop && (
    <div className="gentrification-popup desktop-popup" role="tooltip">
      <p style={{ fontStyle: 'italic', marginBottom: '0.25rem' }}>(adj.)</p>
      <p>
        The process of renovating and improving a house or district so that it conforms to middle-class taste, often displacing lower-income families.
      </p>
    </div>
  )}
</h2>


          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {t('title.line2')}
          </h2>
        </div>

        {/* Right text + buttons */}
        <div className="md:w-1/2">
          <p className="text-lg sm:text-xl leading-relaxed mb-8 sm:mb-10">
            {t('description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-black text-white px-8 py-3 font-medium transition-colors duration-300 border border-black hover:bg-white hover:text-black">
              {t('buttons.learn')}
            </button>
            <button className="bg-white text-black px-8 py-3 font-medium transition-colors duration-300 border border-black hover:bg-black hover:text-white">
              {t('buttons.join')}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Popup fixed at bottom */}
      {showPopup && !isDesktop && (
        <div className="gentrification-popup mobile-popup" role="tooltip">
          <h3 className="font-bold mb-1">Gentrification</h3>
          <p>
            The process of renovating and improving a house or district so that it conforms to middle-class taste, often displacing lower-income families.
          </p>
        </div>
      )}
    </section>
  );
}
