'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState, useRef } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const t = useTranslations('header');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);


  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200); // 200ms grace period before closing
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-gray-700">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Left navigation - desktop only */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="#mission"
            className="text-sm font-medium uppercase tracking-wide text-gray-700 hover:text-black transition-colors"
          >
            {t('mission')}
          </Link>
          <Link
            href="#get-started"
            className="text-sm font-medium uppercase tracking-wide text-gray-700 hover:text-black transition-colors"
          >
            {t('start')}
          </Link>

          {/* Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="text-sm font-medium uppercase tracking-wide text-gray-700 hover:text-black transition-colors flex items-center gap-1">
              {t('explore')} <span>▾</span>
            </button>

            {dropdownOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg py-2 z-10 
                opacity-0 translate-y-1 animate-fadeSlideIn"
              >
                <Link
                  href="/projects"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Projects
                </Link>
                <Link
                  href="/stories"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Stories
                </Link>
                <Link
                  href="/impact"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Impact
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Centered logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold font-serif">
          Logo
        </div>

        {/* Right controls - hidden on mobile */}
        <div className="hidden md:flex items-center space-x-4">
          <LanguageSwitcher />
          <button className="text-sm font-medium tracking-wide border border-black text-black px-4 py-2 hover:bg-black hover:text-white transition-colors">
            {t('login')}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-4 pt-2 space-y-3 bg-white border-t border-gray-200">
          <Link
            href="#mission"
            className="block text-sm font-medium text-gray-700 hover:text-black"
            onClick={() => setMobileOpen(false)}
          >
            {t('mission')}
          </Link>
          <Link
            href="#get-started"
            className="block text-sm font-medium text-gray-700 hover:text-black"
            onClick={() => setMobileOpen(false)}
          >
            {t('start')}
          </Link>
          <details className="group">
            <summary className="text-sm font-medium text-gray-700 cursor-pointer">
              {t('explore')}
            </summary>
            <div className="ml-4 mt-2 space-y-1">
              <Link href="/projects" className="block text-sm text-gray-600 hover:text-black">
                Projects
              </Link>
              <Link href="/stories" className="block text-sm text-gray-600 hover:text-black">
                Stories
              </Link>
              <Link href="/impact" className="block text-sm text-gray-600 hover:text-black">
                Impact
              </Link>
            </div>
          </details>

          {/* Mobile language switcher and login */}
          <div className="pt-2 border-t border-gray-200 flex justify-between items-center">
            <LanguageSwitcher />
            <button className="text-sm font-medium tracking-wide border border-black text-black px-4 py-2 hover:bg-black hover:text-white transition-colors">
              {t('login')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
