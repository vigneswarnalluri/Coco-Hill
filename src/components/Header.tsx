import React, { useState } from 'react';
import { Mail, Phone, Menu, X, ChevronDown, ChevronRight, Search, User, ShoppingCart, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [isLearnDropdownOpen, setIsLearnDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Product data for the dropdown
  const shopCategories = [
    {
      name: "SHOP DRINKS",
      active: true,
      products: [
        { name: "THE ORIGINAL", type: "Coconut Water", image: "/images/product-coconut-water.jpg", rating: 5 },
        { name: "FARMERS ORGANIC", type: "Coconut Water", image: "/images/product-coconut-water.jpg", rating: 5 },
        { name: "PINEAPPLE", type: "Coconut Water", image: "/images/product-pineapple-juice.jpg", rating: 5 },
        { name: "PEACH & MANGO", type: "Coconut Water", image: "/images/product-mango-smoothie.jpg", rating: 5 },
        { name: "EXTRA COCONUT", type: "Coconut Water", image: "/images/product-coconut-water.jpg", rating: 5 }
      ]
    },
    {
      name: "SHOP MERCH",
      active: false,
      products: [
        { name: "STRAWBERRIES & CREME", type: "Treats®", image: "/images/product-mango-smoothie.jpg", rating: 5 },
        { name: "ORANGE & CREME", type: "Treats®", image: "/images/product-mango-smoothie.jpg", rating: 5 },
        { name: "ORIGINAL WITH PULP", type: "Coconut Water", image: "/images/product-coconut-water.jpg", rating: 5 },
        { name: "PIÑA COLADA", type: "Coconut Juice", image: "/images/product-pineapple-juice.jpg", rating: 5 }
      ]
    }
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">


      {/* Top blue banner */}
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
                onMouseEnter={() => setIsShopDropdownOpen(true)}
                onMouseLeave={() => setIsShopDropdownOpen(false)}
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  isShopDropdownOpen 
                    ? 'bg-blue-100 text-blue-600' 
                    : 'text-gray-800 hover:text-blue-600'
                }`}
              >
                products <ChevronDown className="h-3 w-3" />
              </button>
              
              {/* Products Mega Menu Dropdown */}
              {isShopDropdownOpen && (
                <div 
                  className="absolute top-full left-0 w-[800px] bg-white shadow-2xl border border-gray-100 rounded-lg py-6 mt-1"
                  onMouseEnter={() => setIsShopDropdownOpen(true)}
                  onMouseLeave={() => setIsShopDropdownOpen(false)}
                >
                  <div className="flex">
                    {/* Left Panel - Categories */}
                    <div className="w-1/3 px-6 border-r border-gray-100">
                      {shopCategories.map((category, index) => (
                        <div key={index} className="mb-4">
                          <div className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                            category.active 
                              ? 'bg-blue-100 text-blue-600' 
                              : 'bg-amber-50 text-blue-900 hover:bg-amber-100'
                          }`}>
                            <span className="font-medium">{category.name}</span>
                            <ChevronRight className={`h-4 w-4 ${
                              category.active ? 'text-blue-600' : 'text-blue-900'
                            }`} />
                          </div>
                        </div>
                      ))}
                      
                      {/* SHOP ALL Button */}
                      <button className="w-full mt-6 px-4 py-2 border border-blue-600 text-blue-600 bg-white hover:bg-blue-50 rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2">
                        SHOP ALL
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>

                    {/* Right Panel - Product Grid */}
                    <div className="w-2/3 px-6">
                      <div className="grid grid-cols-3 gap-4">
                        {shopCategories[0].products.map((product, index) => (
                          <div key={index} className="bg-white rounded-lg p-3 hover:shadow-md transition-shadow cursor-pointer">
                            <div className="flex justify-center mb-2">
                              <img 
                                src={product.image} 
                                alt={product.name}
                                className="w-16 h-16 object-cover transform -rotate-12"
                              />
                            </div>
                            <div className="flex justify-center mb-2">
                              {[...Array(product.rating)].map((_, i) => (
                                <span key={i} className="text-yellow-400">★</span>
                              ))}
                            </div>
                            <p className="text-xs text-gray-600 text-center mb-1">{product.type}</p>
                            <p className="text-sm font-medium text-gray-900 text-center">{product.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onMouseEnter={() => setIsLearnDropdownOpen(true)}
                onMouseLeave={() => setIsLearnDropdownOpen(false)}
                className="flex items-center gap-1 text-gray-800 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-colors duration-200"
              >
                about us <ChevronDown className="h-3 w-3" />
              </button>
              {isLearnDropdownOpen && (
                <div 
                  className="absolute top-full left-0 w-48 bg-white shadow-xl border border-gray-100 rounded-lg py-2 mt-1"
                  onMouseEnter={() => setIsLearnDropdownOpen(true)}
                  onMouseLeave={() => setIsLearnDropdownOpen(false)}
                >
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">Our Story</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">Team</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">Mission</a>
                </div>
              )}
            </div>

            <a href="#" className="text-gray-800 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-colors duration-200">services</a>
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