import React, { useState, useRef } from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const MediaSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);

  const mediaLogos = [
    { name: "FOOD DIVE", logo: "FOOD DIVE" },
    { name: "CNBC", logo: "CNBC" },
    { name: "Parade", logo: "Parade" },
    { name: "Inc.", logo: "Inc." }
  ];

  const allTextLines = [
    "FROM HOT YOGA TO COFFEE AND BARS:",
    "INSIDE COCO HILL'S PUSH TO MAKE ITS",
    "COCONUT WATER A HOUSEHOLD STAPLE",
    "DISCOVER THE POWER OF NATURAL HYDRATION",
    "JOIN THE COCONUT REVOLUTION TODAY",
    "EVERY SIP TELLS A STORY OF SUSTAINABILITY"
  ];

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    startX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      const deltaX = startX.current - e.clientX;
      if (Math.abs(deltaX) > 100) {
        if (deltaX > 0 && currentIndex < allTextLines.length - 3) {
          setCurrentIndex(prev => prev + 1);
        } else if (deltaX < 0 && currentIndex > 0) {
          setCurrentIndex(prev => prev - 1);
        }
        setIsDragging(false);
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const visibleLines = allTextLines.slice(currentIndex, currentIndex + 3);

  return (
    <section className="relative overflow-hidden">


      {/* Main Content Section - Light Blue Background */}
      <div className="bg-blue-100 py-20 relative">
        {/* Tropical Foliage - Left Side (Image) */}
        <img
          src="/images/Leaf_60864d06-3e52-4e2b-afff-2c84176611c0.png"
          alt="Tropical Leaf"
          className="absolute left-0 top-0 bottom-0 h-full w-[300px] object-cover pointer-events-none z-0"
        />



        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Central Quote */}
          <div className="text-center mb-16">
            <div className="inline-block">
              {/* Top Line */}
              <div className="w-32 h-0.5 bg-blue-600 mx-auto mb-8"></div>
              
              {/* Quote Text - Sliding Container */}
              <div 
                ref={dragRef}
                className="space-y-4 mb-8 relative overflow-hidden"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                style={{ 
                  transition: 'all 0.5s ease-in-out'
                }}
              >
                                 {visibleLines.map((line, index) => (
                   <h2 
                     key={`${currentIndex}-${index}`}
                     className={`text-4xl md:text-5xl font-bold text-blue-900 leading-tight select-none cursor-grab whitespace-nowrap ${
                       !isDragging ? 'animate-slideIn' : ''
                     }`}
                   >
                     {line}
                   </h2>
                 ))}
              </div>
              
              {/* Bottom Line */}
              <div className="w-32 h-0.5 bg-blue-600 mx-auto"></div>
            </div>
          </div>

          {/* Media Logos */}
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
            {mediaLogos.map((media, index) => (
              <div key={index} className="text-gray-600 font-semibold text-lg">
                {media.logo}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section - Dark Green Background */}
      <div className="bg-green-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Left Side - Text */}
            <div className="text-white">
              <div className="text-lg font-semibold">GET 15% OFF</div>
              <div className="text-sm opacity-80">LEARN MORE</div>
            </div>
            
            {/* Right Side - Earn Rewards Button */}
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-semibold rounded-lg flex items-center gap-2">
              Earn Rewards!
              <img 
                src="/images/product-coconut-water.jpg" 
                alt="Coco Hill Product" 
                className="w-6 h-6 rounded-full object-cover"
              />
            </Button>
          </div>
        </div>
      </div>


    </section>
  );
};

export default MediaSection;
