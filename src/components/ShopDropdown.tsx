import { Button } from "@/components/ui/button";
import { Star, ChevronRight } from "lucide-react";
import coconutWater from "@/assets/product-coconut-water.jpg";
import mangoSmoothie from "@/assets/product-mango-smoothie.jpg";

const ShopDropdown = () => {
  const products = [
    {
      name: "Coconut Water",
      subtitle: "The Original",
      rating: 4.6,
      reviews: 1330,
      image: coconutWater,
    },
    {
      name: "Coconut Water",
      subtitle: "Farmers Organic", 
      rating: 4.6,
      reviews: 125,
      image: mangoSmoothie,
    },
  ];

  return (
    <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-blue-200 z-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {products.map((product, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className="bg-gray-50 rounded-lg p-4 mb-3 group-hover:bg-gray-100 transition-colors">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-32 object-contain mix-blend-multiply"
                />
              </div>
              
              <div className="flex items-center justify-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-3 w-3 ${
                      i < Math.floor(product.rating) 
                        ? "text-yellow-400 fill-current" 
                        : "text-gray-300"
                    }`} 
                  />
                ))}
                <span className="text-xs text-gray-600 ml-1">
                  {product.rating} star rating
                </span>
              </div>
              
              <div className="text-xs text-gray-600 mb-2">
                {product.reviews} Reviews
              </div>
              
              <h3 className="font-bold text-sm text-gray-900">
                <span className="text-blue-600">{product.name}</span>
                <div className="text-gray-700">{product.subtitle}</div>
              </h3>
              
              <ChevronRight className="h-4 w-4 text-gray-400 mx-auto mt-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopDropdown;