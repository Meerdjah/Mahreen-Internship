import React, { useState } from 'react';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-extrabold text-blue-600 tracking-tighter">
          MAHREEN<span className="text-gray-900">.</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-600">
          <a href="#hero" className="hover:text-blue-600 transition-colors">Beranda</a>
          <a href="#about" className="hover:text-blue-600 transition-colors">Tentang Program</a>
          
          {/* Desktop Dropdown Container */}
          <div 
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-blue-600 transition-colors focus:outline-none">
              Fokus Area
              <svg 
                className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-blue-600' : ''}`} 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>

            {/* Desktop Dropdown Menu */}
            <div 
              className={`absolute top-full left-0 mt-2 w-56 bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden transition-all duration-300 origin-top-left ${
                isDropdownOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
              }`}
            >
              <div className="py-2">
                <a href="#iot" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  Internet of Things
                </a>
                <a href="#cyber" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  Cybersecurity
                </a>
                <a href="#health" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  Health Monitoring
                </a>
              </div>
            </div>
          </div>

          <a href="#cta" className="hover:text-blue-600 transition-colors">Kontribusi</a>
        </div>

        {/* Mobile Dropdown Button */}
        <button 
          className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-8 h-8 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-125 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-6 font-medium text-gray-800">
          <a href="#hero" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600">Beranda</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600">Tentang Program</a>
          
          <div className="border-t border-gray-100 pt-4">
            <span className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-4 block">Fokus Area</span>
            <div className="flex flex-col gap-4 pl-2">
              <a href="#iot" onClick={() => setIsMobileMenuOpen(false)} className="text-sm hover:text-blue-600">Internet of Things</a>
              <a href="#cyber" onClick={() => setIsMobileMenuOpen(false)} className="text-sm hover:text-blue-600">Cybersecurity</a>
              <a href="#health" onClick={() => setIsMobileMenuOpen(false)} className="text-sm hover:text-blue-600">Health Monitoring</a>
            </div>
          </div>

          <a href="#cta" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600 pt-4 border-t border-gray-100">
            Kontribusi Sekarang
          </a>
        </div>
      </div>
    </nav>
  );
}