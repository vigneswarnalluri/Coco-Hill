import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const SustainabilitySection = () => {
  const stories = [
    {
              image: "/images/sustainability-farming.jpg",
      title: "Two guys in a van",
      subtitle: "OUR STORY",
      description: "A chance encounter in a NYC bar led us to starting Vita Coco. Call it fate!",
      linkText: "LEARN MORE"
    },
    {
              image: "/images/lifestyle-beach.jpg",
      title: "OUR IMPACT",
      subtitle: "OUR IMPACT",
      description: "Turns out, coconuts can do more than create delicious products. From supporting farming communities to providing accessible nutrition to people who need it, we're committed to spreading the goodness of coconuts around the world.",
      linkText: "LEARN MORE"
    },
    {
              image: "/images/product-coconut-water.jpg",
      title: "Coconuts",
      subtitle: "OUR FIRST INGREDIENT",
      description: "We've built a business around one single thing: coconuts. They're what powers Vita Coco and the communities we source from.",
      linkText: "LEARN MORE"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Learn More</h2>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
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
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {story.title}
                </h3>
                <h4 className="text-sm font-bold text-blue-600 uppercase tracking-wide mb-3">
                  {story.subtitle}
                </h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {story.description}
                </p>
                <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0 h-auto font-semibold">
                  {story.linkText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;