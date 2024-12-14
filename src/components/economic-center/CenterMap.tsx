import React from 'react';
import type { EconomicCenter } from '../../constants/economicCenters';

interface CenterMapProps {
  centers: EconomicCenter[];
  selectedId: string | undefined;
}

const CenterMap: React.FC<CenterMapProps> = ({ centers, selectedId }) => {
  return (
    <div className="relative h-[400px] mb-8">
      <div className="absolute inset-0" style={{ 
        backgroundImage: 'url(/src/assets/lk.svg)',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.1
      }} />
      {centers.map(center => (
        <div
          key={center.id}
          className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${
            center.id === selectedId ? 'z-10' : ''
          }`}
          style={{
            left: `${((center.lng - 79.5) / 2.5) * 100}%`,
            top: `${((7.9 - center.lat) / 2) * 100}%`
          }}
        >
          <div className={`w-4 h-4 rounded-full ${
            center.id === selectedId 
              ? 'bg-primary animate-pulse' 
              : 'bg-gray-400'
          }`} />
          {center.id === selectedId && (
            <div className="absolute top-5 left-1/2 -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap">
              {center.name}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CenterMap;