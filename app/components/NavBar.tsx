// components/Navbar.tsx
'use client'
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold text-white hover:text-black cursor-pointer transition-all duration-300">
             Ashmit.dev
            </h1>
          </div>
    
          {/* Desktop Navigation */}
          <div className="hidden md:block ">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#home"
                className="text-white hover:underline px-3 py-2 rounded-lg text-lg font-bold italic transition-all duration-300 hover:text-black cursor-pointer"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-white hover:underline px-3 py-2 rounded-lg text-lg font-bold italic transition-all duration-300 hover:text-black cursor-pointer"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-white hover:underline px-3 py-2 rounded-lg text-lg font-bold italic transition-all duration-300 hover:text-black cursor-pointer"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="text-white hover:underline px-3 py-2 rounded-lg text-lg font-bold italic transition-all duration-300 hover:text-black cursor-pointer"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="text-white hover:underline px-3 py-2 rounded-lg text-lg font-bold italic transition-all duration-300 hover:text-black cursor-pointer"
              >
                Contact
              </a>
            </div>
          </div>

          {/* CTA Button */}
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white/90 hover:text-white hover:bg-white/10 p-2 rounded-lg transition-all duration-300 backdrop-blur-sm"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/20 backdrop-blur-md rounded-lg mt-2 border border-white/10">
              <a
                href="#home"
                className="text-white/90 hover:text-white hover:bg-white/10 block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-white/90 hover:text-white hover:bg-white/10 block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#projects"
                className="text-white/90 hover:text-white hover:bg-white/10 block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#skills"
                className="text-white/90 hover:text-white hover:bg-white/10 block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </a>
              <a
                href="#contact"
                className="text-white/90 hover:text-white hover:bg-white/10 block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}