import React from 'react';
import { Button } from './ui/button';
import { Leaf, Heart, MapPin, Zap } from 'lucide-react';

const LifestyleSection = () => {
  const benefits = [
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: "Full of Good Stuff Plus",
      description: "Electrolytes like Potassium and Magnesium that are found in coconut water help keep your body hydrated and properly functioning."
    },
    {
      icon: <Heart className="h-8 w-8 text-pink-600" />,
      title: "Makes Tastebuds Happy Plus",
      description: "Makes our coconuts great on their own, or mixed in with other ingredients."
    },
    {
      icon: <MapPin className="h-8 w-8 text-blue-600" />,
      title: "Takes You to the Tropics Plus",
      description: "Makes our coconuts great on their own, or mixed in with other ingredients."
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "Feel Good Fuel Plus",
      description: "Nail your vacation selfie? Check. Survive on a tropical island? Check. Play a game of pick up soccer? Check."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Coconuts? Why?
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LifestyleSection;