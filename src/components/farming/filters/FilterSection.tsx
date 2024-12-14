import React from 'react';
import { Search } from 'lucide-react';
import VegetableSelect from './VegetableSelect';
import SelectField from './SelectField';
import { genres, locations } from '../../../constants/farming';

interface FilterSectionProps {
  selectedVegetable: string;
  selectedGenre: string;
  selectedLocation: string;
  onVegetableChange: (value: string) => void;
  onGenreChange: (value: string) => void;
  onLocationChange: (value: string) => void;
  onSearch: () => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  selectedVegetable,
  selectedGenre,
  selectedLocation,
  onVegetableChange,
  onGenreChange,
  onLocationChange,
  onSearch,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="grid md:grid-cols-4 gap-4">
        <VegetableSelect
          value={selectedVegetable}
          onChange={onVegetableChange}
        />

        <SelectField
          label="Genre"
          value={selectedGenre}
          onChange={onGenreChange}
          options={genres}
          placeholder="All Genres"
        />

        <SelectField
          label="Location"
          value={selectedLocation}
          onChange={onLocationChange}
          options={locations}
          placeholder="All Locations"
        />

        <div className="flex items-end">
          <button
            onClick={onSearch}
            className="w-full bg-primary text-white p-2 rounded-md hover:bg-secondary transition-colors flex items-center justify-center gap-2"
          >
            <Search size={20} />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;