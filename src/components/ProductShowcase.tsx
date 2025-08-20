import React from 'react';
import { Button } from './ui/button';
import { Star, ShoppingCart } from 'lucide-react';

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: "Piña Colada Coconut Juice",
      category: "NEW",
      price: 24.99,
      comparePrice: 0,
      image: "/images/product-pineapple-juice.jpg",
      isNew: true,
      isSoldOut: false
    },
    {
      id: 2,
      name: "Orange & Creme Treats®",
      category: "NEW",
      price: 34.99,
      comparePrice: 0,
      image: "/images/product-mango-smoothie.jpg",
      isNew: true,
      isSoldOut: false
    },
    {
      id: 3,
      name: "Strawberries & Creme Treats®",
      category: "NEW",
      price: 34.99,
      comparePrice: 0,
      image: "/images/product-acai-smoothie.jpg",
      isNew: true,
      isSoldOut: false
    },
    {
      id: 4,
      name: "The Original Coconut Water",
      category: "Coconut Water",
      price: 27.49,
      comparePrice: 0,
      image: "/images/product-coconut-water.jpg",
      isNew: false,
      isSoldOut: false
    },
    {
      id: 5,
      name: "Extra Coconut Coconut Water",
      category: "Coconut Water",
      price: 27.49,
      comparePrice: 0,
      image: "/images/product-coconut-water.jpg",
      isNew: false,
      isSoldOut: false
    },
    {
      id: 6,
      name: "Original with Pulp Coconut Juice",
      category: "Coconut Juice",
      price: 24.99,
      comparePrice: 0,
      image: "/images/product-pineapple-juice.jpg",
      isNew: false,
      isSoldOut: false
    },
    {
      id: 7,
      name: "Original Coconut M🌴LK",
      category: "Coconut M🌴LK",
      price: 22.99,
      comparePrice: 0,
      image: "/images/product-coconut-water.jpg",
      isNew: false,
      isSoldOut: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our range of delicious coconut-based beverages and treats
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              {/* Product Image */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                {product.isNew && (
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    NEW
                  </div>
                )}
                {product.isSoldOut && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    SOLD OUT
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-gray-500 uppercase tracking-wide">
                    {product.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                  {product.name}
                </h3>

                {/* Size Options */}
                <div className="mb-4">
                  <span className="text-sm text-gray-600">16.5oz (12pk)</span>
                </div>

                {/* Pricing */}
                <div className="mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-gray-900">
                      ${product.price}
                    </span>
                    {product.comparePrice > 0 && (
                      <span className="text-lg text-gray-500 line-through">
                        ${product.comparePrice}
                      </span>
                    )}
                  </div>
                  
                  {/* Subscribe & Save */}
                  <div className="mt-2">
                    <span className="text-sm text-blue-600 font-medium">
                      Subscribe & Save
                    </span>
                    <div className="text-sm text-gray-600">
                      ${(product.price * 0.9).toFixed(2)}
                    </div>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
                  disabled={product.isSoldOut}
                >
                  {product.isSoldOut ? 'Sold Out' : 'Add to Cart'}
                  {!product.isSoldOut && <ShoppingCart className="ml-2 h-4 w-4" />}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold rounded-lg">
            Shop All
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;