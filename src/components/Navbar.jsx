import React, { useState } from 'react';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-extrabold text-blue-600 tracking-tighter">
          MAHREEN<span className="text-gray-900">.</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-600">
          <a href="#hero" className="hover:text-blue-600 transition-colors">Beranda</a>
          <a href="#about" className="hover:text-blue-600 transition-colors">Tentang Program</a>
          
          {/* Dropdown Container */}
          <div 
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-blue-600 transition-colors focus:outline-none">
              Fokus Area
              {/* Chevron Arrow that flips when open */}
              <svg 
                className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-blue-600' : ''}`} 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>

            {/* Dropdown Menu */}
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
                  System Security
                </a>
                <a href="#health" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  Health Monitoring
                </a>
              </div>
            </div>
          </div>

          <a href="#cta" className="hover:text-blue-600 transition-colors">Kontribusi</a>
        </div>
        
      </div>
    </nav>
  );
}