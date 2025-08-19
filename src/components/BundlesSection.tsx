import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Star } from 'lucide-react';

const BundlesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Tropical<br />
              <span className="text-blue-600">taste, Pure</span><br />
              Refreshment!
            </h2>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                New Coconut Juice<br />
                Piña Colada w/Pulp
              </h3>
              <p className="text-lg text-gray-600">
                Sweet and refreshing it's a vacation-in-a-can!
              </p>
            </div>
            
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <img
              src="/src/assets/product-pineapple-juice.jpg"
              alt="Piña Colada Coconut Juice"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            
            {/* Product Badge */}
            <div className="absolute -top-4 -left-4 bg-blue-600 text-white px-4 py-2 rounded-full font-bold text-sm">
              NEW
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-yellow-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-green-400 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BundlesSection;