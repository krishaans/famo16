import React from 'react';
import type { Vegetable } from '../../constants/vegetables';

interface VegetablePriceListProps {
  vegetables: Vegetable[];
  onSelect: (name: string) => void;
}

const VegetablePriceList: React.FC<VegetablePriceListProps> = ({ vegetables, onSelect }) => {
  return (
    <div className="grid gap-4">
      {vegetables.map((veg) => (
        <button
          key={veg.name}
          onClick={() => onSelect(veg.name)}
          className="w-full text-left p-6 rounded-lg border-2 border-gray-100 hover:border-secondary hover:shadow-md transition-all duration-300"
        >
          <div className="flex justify-between items-center">
            <div>
              <span className="text-lg font-semibold text-gray-800">{veg.name}</span>
              <div className="text-sm text-gray-500 mt-1">
                Trend: {veg.trend}
              </div>
            </div>
            <div className="text-xl font-bold text-primary">
              {veg.price} {veg.unit}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default VegetablePriceList;