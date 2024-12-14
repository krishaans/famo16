import React from 'react';
import Advertisement from './Advertisement';

const ads = [
  {
    title: 'Premium Farming Equipment',
    description: 'Get 20% off on all farming equipment this month. High-quality tools for professional farmers.',
    imageUrl: 'https://images.unsplash.com/photo-1617104551722-3b2d51366400?w=500',
    link: '#',
    sponsor: 'AgriTech Solutions'
  },
  {
    title: 'Organic Fertilizers',
    description: 'Boost your crop yield with our certified organic fertilizers. Special offers for Famo users.',
    imageUrl: 'https://images.unsplash.com/photo-1615920292118-dadf3b5ef141?w=500',
    link: '#',
    sponsor: 'GreenGrow'
  },
  {
    title: 'Smart Irrigation Systems',
    description: 'Automate your irrigation with IoT-enabled systems. Save water and increase efficiency.',
    imageUrl: 'https://images.unsplash.com/photo-1463123081488-789f998ac9c4?w=500',
    link: '#',
    sponsor: 'SmartFarm'
  }
];

const AdvertisementSection: React.FC = () => {
  return (
    <div className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary mb-4">Featured Partners</h2>
        <p className="text-gray-600">Discover premium products and services from our trusted partners</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ads.map((ad, index) => (
          <Advertisement key={index} {...ad} />
        ))}
      </div>
    </div>
  );
};

export default AdvertisementSection;