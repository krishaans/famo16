import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './hero/HeroSection';
import { heroContent } from '../../constants/heroContent';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[500px] bg-primary overflow-hidden mt-16 md:mt-0">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1920"
          alt="Farm"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4 space-y-12">
        {heroContent.map((content, index) => (
          <HeroSection
            key={content.title}
            title={content.title}
            description={content.description}
            delay={index * 0.3}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;