import React, { useState } from 'react';
import { vegetables } from '../../../constants/farming';

interface VegetableSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const VegetableSelect: React.FC<VegetableSelectProps> = ({ value, onChange }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredVegetables = vegetables.filter(veg => 
    veg.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Vegetable *
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          setSearchQuery(e.target.value);
        }}
        className="w-full p-2 border rounded-md"
        placeholder="Select or type..."
      />
      {searchQuery && (
        <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
          {filteredVegetables.map((veg) => (
            <button
              key={veg}
              className="w-full text-left px-4 py-2 hover:bg-gray-100"
              onClick={() => {
                onChange(veg);
                setSearchQuery('');
              }}
            >
              {veg}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default VegetableSelect;