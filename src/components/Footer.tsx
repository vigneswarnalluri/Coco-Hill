import React from 'react';
import { ChevronDown, Linkedin, Facebook, Twitter, Instagram, MessageCircle, Music } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Shop */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">All Products</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Wholesale</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Store Locator</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">My Account</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">FAQ</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Our Story</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Impact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Impact Report 2024</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Foundation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">The Vita Coco Company</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Investor Relations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Press Kit</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Accessibility Statement</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <MessageCircle className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Music className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Legal Links */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-300">
              <a href="#" className="hover:text-white">Shipping & Returns</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Refund policy</a>
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-300 text-right">
              © 2025 The Vita Coco Company, Inc. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;