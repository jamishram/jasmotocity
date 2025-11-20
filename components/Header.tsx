import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Tyres', href: '#products' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center items-center h-auto py-2 md:h-24 relative">
          
          {/* Mobile Menu Button - Absolute Left on Mobile */}
          <div className="md:hidden absolute left-4 top-1/2 transform -translate-y-1/2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-[#FF0000] focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>

          {/* Logo Section - Centered */}
          <div className="flex-shrink-0 flex items-center justify-center mb-2 md:mb-0 md:mr-8">
             <img 
               src="https://i.ibb.co/tCk5x9R/1706799679179.png" 
               alt="JAS MOTOCITY" 
               className="h-16 md:h-20 w-auto object-contain drop-shadow-lg hover:scale-105 transition-transform"
             />
          </div>

          {/* Desktop Nav - Centered */}
          <nav className="hidden md:flex space-x-8 items-center justify-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-[#FF0000] transition-colors text-sm font-bold uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Nav Panel */}
      {isOpen && (
        <div className="md:hidden bg-black/95 border-t border-gray-800 absolute w-full text-center">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 rounded-md text-xl font-medium text-white hover:text-[#FF0000] w-full"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};