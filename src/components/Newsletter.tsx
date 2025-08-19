import React, { useState } from 'react';
import { Button } from './ui/button';
import { Mail } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
  };

  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Sign up for our newsletter and get 15% off.
        </h2>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-opacity-50 text-gray-900 placeholder-gray-500"
                required
              />
            </div>
            <Button 
              type="submit"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 font-semibold rounded-lg whitespace-nowrap"
            >
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;