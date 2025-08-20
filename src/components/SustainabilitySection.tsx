import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const SustainabilitySection = () => {
  const stories = [
    {
      image: "/images/sustainability-farming.jpg",
      title: "OUR STORY",
      description: "A chance encounter in a NYC bar led us to starting Coco Hill. Call it fate!",
      linkText: "LEARN MORE"
    },
    {
      image: "/images/lifestyle-beach.jpg",
      title: "OUR IMPACT",
      description: "Turns out, coconuts can do more than create delicious products. From supporting farming communities to providing accessible nutrition to people who need it, we're committed to spreading the goodness of coconuts around the world.",
      linkText: "LEARN MORE"
    },
    {
      image: "/images/product-coconut-water.jpg",
      title: "OUR FIRST INGREDIENT",
      description: "We've built a business around one single thing: coconuts. They're what powers Coco Hill and the communities we source from.",
      linkText: "LEARN MORE"
    }
  ];

  return (
    <section className="py-20 bg-green-600 relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute right-0 top-0 bottom-0 w-96 opacity-20">
        <div className="w-full h-full bg-green-500 rounded-l-full transform translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">LEARN MORE</h2>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stories.map((story, index) => (
            <div key={index} className="bg-white/90 backdrop-blur-sm overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
              {/* Image */}
              <div className="relative h-64">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {story.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                  {story.description}
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold underline text-sm">
                  {story.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg">
            GET 15% OFF
          </Button>
          
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg flex items-center gap-2">
            Earn Rewards!
            <img 
              src="/images/product-coconut-water.jpg" 
              alt="Coco Hill Product" 
              className="w-6 h-6 rounded-full object-cover"
            />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;