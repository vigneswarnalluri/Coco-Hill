import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';

const ProductShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: "PIÑA COLADA",
      type: "Coconut Juice",
      image: "/images/product-pineapple-juice.jpg",
      rating: 5,
      reviews: 191,
      size: "16.5oz (12pk)",
      price: "24.99",
      subscribePrice: "22.49",
      badge: "NEW"
    },
    {
      id: 2,
      name: "ORANGE & CREME",
      type: "Treats®",
      image: "/images/product-mango-smoothie.jpg",
      rating: 5,
      reviews: 142,
      size: "16.9oz (12pk)",
      price: "34.99",
      subscribePrice: "31.49",
      badge: "NEW"
    },
    {
      id: 3,
      name: "STRAWBERRIES & CREME",
      type: "Treats®",
      image: "/images/product-mango-smoothie.jpg",
      rating: 5,
      reviews: 142,
      size: "16.9oz (12pk)",
      price: "34.99",
      subscribePrice: "31.49",
      badge: "NEW"
    },
    {
      id: 4,
      name: "THE ORIGINAL",
      type: "Coconut Water",
      image: "/images/product-coconut-water.jpg",
      rating: 5,
      reviews: 1330,
      size: "16.9oz Carton (12pk)",
      price: "27.49",
      subscribePrice: "24.74"
    },
    {
      id: 5,
      name: "PINEAPPLE",
      type: "Coconut Water",
      image: "/images/product-pineapple-juice.jpg",
      rating: 5,
      reviews: 1330,
      size: "16.9oz Carton (12pk)",
      price: "27.49",
      subscribePrice: "24.74"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-amber-50 relative overflow-hidden">
      {/* Decorative green circle */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-green-600 rounded-full opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">OUR PRODUCTS</h2>
        </div>

        {/* Products Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Products Grid */}
          <div className="grid grid-cols-5 gap-6 px-16">
            {products.map((product, index) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                {/* Product Image */}
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  {product.badge && (
                    <div className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {product.badge}
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-4">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">{product.reviews} Reviews</span>
                  </div>

                  {/* Product Name & Type */}
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{product.type}</p>

                  {/* Size Selection */}
                  <div className="mb-3">
                    {product.id === 4 ? (
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-medium transition-colors flex items-center gap-1">
                        {product.size}
                        <ChevronRight className="h-3 w-3" />
                      </button>
                    ) : (
                      <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium transition-colors">
                        {product.size}
                      </button>
                    )}
                  </div>

                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <input type="radio" name={`pricing-${product.id}`} id={`one-time-${product.id}`} defaultChecked />
                      <label htmlFor={`one-time-${product.id}`} className="text-sm font-medium text-gray-900">
                        One-Time Purchase
                      </label>
                    </div>
                    <div className="text-lg text-gray-900 mb-2">
                      ${product.price}
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <input type="radio" name={`pricing-${product.id}`} id={`subscribe-${product.id}`} />
                      <label htmlFor={`subscribe-${product.id}`} className="text-sm font-medium text-gray-900">
                        Subscribe & Save
                      </label>
                    </div>
                    <div className="text-lg text-gray-900 mb-2">
                      ${product.price} <span className="text-blue-600">${product.subscribePrice}</span>
                    </div>
                    
                    {/* Delivery Frequency Dropdown for Subscribe & Save */}
                    <div className="mb-3">
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white">
                        <option value="2-weeks">Delivered every 2 weeks</option>
                        <option value="3-weeks">Delivered every 3 weeks</option>
                        <option value="4-weeks">Delivered every 4 weeks</option>
                        <option value="12-weeks">Delivered every 12 weeks</option>
                      </select>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold">
                    ADD TO CART
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SHOP ALL Button */}
        <div className="text-center mt-12">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg flex items-center gap-2 mx-auto">
            SHOP ALL
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;