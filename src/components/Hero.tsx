import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "The Better",
      subtitle: "Fitness Fuel",
      description: "Our Original Coconut Water has 3.5x the electrolytes versus the leading sports drink.",
      buttonText: "Shop Now",
      image: "/images/hero-tropical-drink.jpg",
      bgGradient: "from-blue-50 to-green-50"
    },
    {
      id: 2,
      title: "Tropical",
      subtitle: "taste, Pure",
      description: "Sweet and refreshing it's a vacation-in-a-can!",
      buttonText: "Shop Now",
      image: "/images/product-pineapple-juice.jpg",
      bgGradient: "from-orange-50 to-yellow-50"
    },
    {
      id: 3,
      title: "Natural",
      subtitle: "Hydration",
      description: "Pure coconut water with no artificial flavors or sweeteners.",
      buttonText: "Learn More",
      image: "/images/product-coconut-water.jpg",
      bgGradient: "from-green-50 to-blue-50"
    },
    {
      id: 4,
      title: "Beach",
      subtitle: "Vibes Only",
      description: "Experience the ultimate tropical refreshment with our premium coconut beverages.",
      buttonText: "Shop Now",
      image: "/images/VitaCoco_JuiceHutchBeach_Header_extended2-pina_only_1.png",
      bgGradient: "from-teal-50 to-blue-50"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative overflow-hidden">

      
      {/* Slideshow Container */}
      <div className="relative min-h-screen w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-full'
            }`}
            style={{ zIndex: index === currentSlide ? 10 : 1 }}
          >
            <div className="relative w-full h-screen">
              {/* Full-screen background image */}
              <img
                src={slide.image}
                alt={`Slide ${slide.id}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black/30"></div>
              
              {/* Content overlay */}
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  {/* Content */}
                  <div className="text-white">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                      {slide.title}<br />
                      <span className="text-blue-200">{slide.subtitle}</span>
                    </h1>
                    
                    <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                      {slide.description}
                    </p>
                    
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg">
                      {slide.buttonText}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-20">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        
        {/* Slide Indicators */}
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
        
        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
      </div>
      
      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 z-15">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-auto">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="#3B82F6"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19.3,79.78-31.16,121.94-39.2C402.38,4.06,478.09,6.17,553.47,24.27c75.84,18.17,146.27,48.36,214.84,82.34,68.57,33.98,135.37,71.24,202.69,108.3,67.32,37.07,134.32,74.14,201.32,111.19V0Z"
            opacity=".5"
            fill="#3B82F6"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;