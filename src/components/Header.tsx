import React, { useState } from 'react';
import { Mail, Phone, Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleAboutDropdown = () => setIsAboutDropdownOpen(!isAboutDropdownOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top blue bar */}
      <div className="bg-blue-600 text-white text-center py-2 text-xs font-medium">
        <div className="flex items-center justify-center gap-3">
          <span className="text-sm">🌴</span>
          <span className="uppercase tracking-wide">lorem ipsum</span>
          <span className="text-sm">🌴</span>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Left side menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative">
              <button
                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                onMouseLeave={() => setIsAboutDropdownOpen(false)}
                className="flex items-center gap-1 text-gray-800 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-colors duration-200"
              >
                about us <ChevronDown className="h-3 w-3" />
              </button>
              {isAboutDropdownOpen && (
                <div className="absolute top-full left-0 w-48 bg-white shadow-xl border border-gray-100 rounded-lg py-2 mt-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">Our Story</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">Team</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">Mission</a>
                </div>
              )}
            </div>
            <a href="#" className="text-gray-800 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-colors duration-200">services</a>
            <a href="#" className="text-gray-800 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-colors duration-200">products</a>
            <a href="#" className="text-gray-800 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-colors duration-200">contact</a>
          </nav>

          {/* Center Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold">
              <span className="text-blue-600">VITA</span>
              <br />
              <span className="text-gray-800 text-lg">COCO</span>
            </h1>
          </div>

          {/* Right side contact info */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="mailto:sales@cocohill.in" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">
              <Mail className="h-4 w-4" />
              <span className="text-sm font-medium">sales@cocohill.in</span>
            </a>
            <a href="tel:+919624317313" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">+91 9624317313</span>
            </a>
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-800 hover:text-blue-600 p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-6 py-4 space-y-3">
            <a href="#" className="block py-2 text-base font-medium text-gray-800 hover:text-blue-600">about us</a>
            <a href="#" className="block py-2 text-base font-medium text-gray-800 hover:text-blue-600">services</a>
            <a href="#" className="block py-2 text-base font-medium text-gray-800 hover:text-blue-600">products</a>
            <a href="#" className="block py-2 text-base font-medium text-gray-800 hover:text-blue-600">contact</a>
            <div className="pt-4 space-y-3 border-t border-gray-100">
              <a href="mailto:sales@cocohill.in" className="flex items-center gap-3 py-2 text-base font-medium text-gray-800 hover:text-blue-600">
                <Mail className="h-5 w-5" />
                sales@cocohill.in
              </a>
              <a href="tel:+919624317313" className="flex items-center gap-3 py-2 text-base font-medium text-gray-800 hover:text-blue-600">
                <Phone className="h-5 w-5" />
                +91 9624317313
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;