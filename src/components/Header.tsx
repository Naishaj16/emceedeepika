import React, { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { Sparkles, Menu, X, Calendar, ChevronDown, Globe } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Services', to: '/services' },
    { name: 'Gallery', to: '/gallery' },
    { name: 'Contact', to: '/contact' },
  ];

  const locations = [
    { name: 'Chennai, India', to: '/locations/chennai' },
    { name: 'Dubai, UAE', to: '/locations/dubai' },
    { name: 'Malaysia (KL)', to: '/locations/malaysia' },
    { name: 'Singapore', to: '/locations/singapore' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? 'bg-pastel-100 border-b border-pastel-200 shadow-sm py-3'
          : 'bg-pastel-100/90 border-b border-pastel-200/60 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
          <img
            src="/logo.png"
            alt="Emcee Deepika Jain Logo"
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain drop-shadow-sm group-hover:scale-105 transition-transform"
          />
          <div>
            <span className="font-serif text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-pastel-900 block group-hover:text-pastel-700 transition-colors">
              Deepika Jain
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-pastel-600 font-semibold block">
              International Emcee & Host
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeProps={{
                className: 'text-pastel-800 font-bold border-b-2 border-gold-DEFAULT pb-1',
              }}
              inactiveProps={{
                className: 'text-pastel-700 hover:text-pastel-900 font-medium gold-underline transition-colors',
              }}
            >
              {link.name}
            </Link>
          ))}

          {/* Locations Dropdown */}
          <div className="relative" onMouseLeave={() => setLocationsOpen(false)}>
            <button
              onMouseEnter={() => setLocationsOpen(true)}
              onClick={() => setLocationsOpen(!locationsOpen)}
              className="flex items-center gap-1 text-pastel-700 hover:text-pastel-900 font-medium transition-colors cursor-pointer py-1"
            >
              <Globe className="w-4 h-4 text-pastel-600" />
              <span>Locations</span>
              <ChevronDown className="w-4 h-4 text-pastel-500" />
            </button>

            {locationsOpen && (
              <div className="absolute top-full left-0 w-48 bg-pastel-50 border border-pastel-200 rounded-2xl shadow-xl py-2 z-50">
                {locations.map((loc) => (
                  <Link
                    key={loc.to}
                    to={loc.to}
                    onClick={() => setLocationsOpen(false)}
                    className="block px-4 py-2 text-sm text-pastel-800 hover:bg-pastel-100 font-medium"
                  >
                    {loc.name}
                  </Link>
                ))}
                <div className="border-t border-pastel-200 my-1 pt-1">
                  <Link
                    to="/guides/anchor-vs-emcee"
                    onClick={() => setLocationsOpen(false)}
                    className="block px-4 py-2 text-xs text-pastel-600 hover:bg-pastel-100 font-semibold"
                  >
                    Guide: Anchor vs Emcee
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-pastel-800 hover:text-pastel-900 rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-pastel-100 border-b border-pastel-200 px-6 py-6 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-pastel-800 hover:text-pastel-600 py-1"
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-2 border-t border-pastel-200">
            <span className="text-xs font-bold uppercase tracking-wider text-pastel-500 block mb-2">Target Locations</span>
            <div className="grid grid-cols-2 gap-2">
              {locations.map((loc) => (
                <Link
                  key={loc.to}
                  to={loc.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs font-medium text-pastel-700 bg-pastel-100 p-2 rounded-lg"
                >
                  {loc.name}
                </Link>
              ))}
            </div>
            <Link
              to="/guides/anchor-vs-emcee"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-semibold text-pastel-600 mt-2 text-center"
            >
              Read Guide: Anchor vs Emcee Difference
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
