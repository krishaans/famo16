import React from 'react';
import { frequentVegetables } from '../../constants/farming';

interface FrequentVegetablesProps {
  onSelect: (vegetable: string) => void;
}

const FrequentVegetables: React.FC<FrequentVegetablesProps> = ({ onSelect }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-primary mb-4">Frequently Asked</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {frequentVegetables.map((veg) => (
          <button
            key={veg}
            onClick={() => onSelect(veg)}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
          >
            {veg}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FrequentVegetables;