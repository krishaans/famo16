import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  description: string;
  delay: number;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className="text-center"
    >
      <h1 className="text-4xl md:text-6xl font-bold font-codec mb-4">
        {title}
      </h1>
      <p className="text-xl md:text-2xl max-w-3xl mx-auto">
        {description}
      </p>
    </motion.div>
  );
};

export default HeroSection;