import React from 'react';
import { ChevronRight, ExternalLink, Linkedin, Facebook, Twitter, Instagram, MessageCircle, Music } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white">
      {/* IN THE WILD Section */}
      <div className="bg-amber-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">IN THE WILD</h2>
          <p className="text-xl text-gray-700">Tag us @cocohill</p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Column - SHOP & HELP */}
            <div className="space-y-8">
              {/* SHOP */}
              <div>
                <h3 className="text-lg font-bold uppercase mb-4">Shop</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-white hover:text-blue-200 transition-colors">All Products</a></li>
                  <li><a href="#" className="text-white hover:text-blue-200 transition-colors">Wholesale</a></li>
                  <li><a href="#" className="text-white hover:text-blue-200 transition-colors">Store Locator</a></li>
                  <li><a href="#" className="text-white hover:text-blue-200 transition-colors">My Account</a></li>
                </ul>
              </div>

              {/* HELP */}
              <div>
                <h3 className="text-lg font-bold uppercase mb-4">Help</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-white hover:text-blue-200 transition-colors">Contact</a></li>
                  <li><a href="#" className="text-white hover:text-blue-200 transition-colors">FAQ</a></li>
                </ul>
              </div>
            </div>

            {/* Center Column - Logo, Newsletter & Social */}
            <div className="text-center space-y-8">
              {/* Logo */}
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold mb-2">
                  <span className="text-white">COCO</span>
                  <span className="text-blue-400">HILL</span>
                </div>
                <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">🌴</span>
                </div>
              </div>

              {/* Newsletter */}
              <div className="max-w-md mx-auto">
                <h3 className="text-xl font-bold uppercase mb-4">
                  SIGN UP FOR OUR NEWSLETTER AND GET 15% OFF.
                </h3>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="EMAIL ADDRESS"
                    className="flex-1 px-4 py-3 text-gray-900 placeholder-gray-500 rounded-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white font-semibold flex items-center gap-2 transition-colors">
                    SIGN UP
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex justify-center space-x-4">
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors">
                  <Linkedin className="h-5 w-5 text-blue-900" />
                </a>
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors">
                  <Facebook className="h-5 w-5 text-blue-900" />
                </a>
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors">
                  <Twitter className="h-5 w-5 text-blue-900" />
                </a>
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors">
                  <Instagram className="h-5 w-5 text-blue-900" />
                </a>
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors">
                  <MessageCircle className="h-5 w-5 text-blue-900" />
                </a>
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors">
                  <Music className="h-5 w-5 text-blue-900" />
                </a>
              </div>

              {/* Accessibility Badge */}
              <div className="bg-orange-500 text-white text-xs px-4 py-2 rounded-full inline-block">
                <div className="font-bold">ACCESS DESIGN STUDIO</div>
                <div>CERTIFIED ACCESSIBLE WEBSITE</div>
                <div>FEB 2025</div>
              </div>
            </div>

            {/* Right Column - ABOUT */}
            <div>
              <h3 className="text-lg font-bold uppercase mb-4">About</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white hover:text-blue-200 transition-colors">Our Story</a></li>
                <li><a href="#" className="text-white hover:text-blue-200 transition-colors">Impact</a></li>
                <li><a href="#" className="text-white hover:text-blue-200 transition-colors">Impact Report 2024</a></li>
                <li><a href="#" className="text-white hover:text-blue-200 transition-colors">Foundation</a></li>
                <li><a href="#" className="text-white hover:text-blue-200 transition-colors">Careers</a></li>
                <li>
                  <a href="#" className="text-white hover:text-blue-200 transition-colors flex items-center gap-2">
                    The Coco Hill Company
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
                <li><a href="#" className="text-white hover:text-blue-200 transition-colors">Investor Relations</a></li>
                <li><a href="#" className="text-white hover:text-blue-200 transition-colors">Press Kit</a></li>
                <li><a href="#" className="text-white hover:text-blue-200 transition-colors">Accessibility Statement</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-800 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <div className="text-sm text-blue-200">
                © 2025 The Coco Hill Company, Inc. All Rights Reserved.
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-blue-200">
                <a href="#" className="hover:text-white transition-colors">SHIPPING & RETURNS</a>
                <span className="text-blue-700">|</span>
                <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
                <span className="text-blue-700">|</span>
                <a href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
                <span className="text-blue-700">|</span>
                <a href="#" className="hover:text-white transition-colors">REFUNDS</a>
              </div>

              {/* Earn Rewards Button */}
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-semibold transition-colors">
                Earn Rewards!
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;