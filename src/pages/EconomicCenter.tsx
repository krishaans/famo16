import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import PriceChart from '../components/PriceChart';
import PriceTable from '../components/prices/PriceTable';
import { economicCenters } from '../constants/economicCenters';
import { vegetables } from '../constants/vegetables';
import { generateRandomPriceData } from '../utils/priceData';

const EconomicCenter: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedVegetable, setSelectedVegetable] = useState<string | null>(null);
  const currentCenter = economicCenters.find(center => center.id === id);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-light">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-4 mb-8">
          <button 
            onClick={() => window.history.back()}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft className="text-primary" size={24} />
          </button>
          <h2 className="text-4xl font-bold text-primary capitalize">
            {currentCenter?.name || id?.replace('-', ' ')} Economic Center
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Current Prices</h3>
            <PriceTable 
              vegetables={vegetables}
              onSelect={setSelectedVegetable}
            />
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8">
            {selectedVegetable ? (
              <PriceChart
                data={generateRandomPriceData()}
                vegetableName={selectedVegetable}
              />
            ) : (
              <div className="h-full flex items-center justify-center text-gray-500">
                Select a vegetable to view price trends
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EconomicCenter;