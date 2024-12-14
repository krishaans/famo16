import React from 'react';
import type { VegetableGuide } from '../../types/farming';

interface VegetableHeaderProps {
  vegetable: VegetableGuide;
}

const VegetableHeader: React.FC<VegetableHeaderProps> = ({ vegetable }) => {
  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-8">
      <div className="relative h-[400px]">
        <img
          src={vegetable.image}
          alt={vegetable.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-8">
        <h1 className="text-4xl font-bold text-primary mb-4">{vegetable.name}</h1>
        <p className="text-xl text-gray-600 mb-6">{vegetable.description}</p>
        <div className="grid md:grid-cols-2 gap-4 text-gray-600">
          <div>
            <strong>Climate:</strong> {vegetable.climate}
          </div>
          <div>
            <strong>Season:</strong> {vegetable.season}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VegetableHeader;