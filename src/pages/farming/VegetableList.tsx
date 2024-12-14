import React, { useState } from 'react';
import VegetableCard from '../../components/farming/VegetableCard';
import FilterSection from '../../components/farming/filters/FilterSection';
import FrequentVegetables from '../../components/farming/FrequentVegetables';
import { farmingGuides } from '../../data/farmingGuides';

const VegetableList: React.FC = () => {
  const [selectedVegetable, setSelectedVegetable] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [searchResults, setSearchResults] = useState(farmingGuides);

  const handleSearch = () => {
    const filtered = farmingGuides.filter(guide => {
      const matchesVegetable = selectedVegetable 
        ? guide.name.toLowerCase() === selectedVegetable.toLowerCase()
        : true;
      
      return matchesVegetable;
    });
    
    setSearchResults(filtered);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">How to Farm</h1>
        <p className="text-gray-600 mb-8">
          Select a vegetable to learn detailed farming instructions from land preparation to harvesting.
        </p>

        <FilterSection
          selectedVegetable={selectedVegetable}
          selectedGenre={selectedGenre}
          selectedLocation={selectedLocation}
          onVegetableChange={setSelectedVegetable}
          onGenreChange={setSelectedGenre}
          onLocationChange={setSelectedLocation}
          onSearch={handleSearch}
        />

        <FrequentVegetables onSelect={setSelectedVegetable} />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {searchResults.map((vegetable) => (
          <VegetableCard key={vegetable.id} vegetable={vegetable} />
        ))}
      </div>
    </div>
  );
};

export default VegetableList;