import React from 'react';
import { Check } from 'lucide-react';

const proFeatures = [
  'Advanced market predictions with AI-powered insights',
  'Real-time weather impact analysis and alerts',
  'Detailed profit optimization suggestions',
  'Priority access to economic center data',
  'Advanced crop disease detection with AI',
  'Personalized farming calendar',
  'Premium customer support',
  'Ad-free experience'
];

const ProFeaturesList: React.FC = () => {
  return (
    <ul className="space-y-3">
      {proFeatures.map((feature, index) => (
        <li key={index} className="flex items-center gap-3 text-white">
          <Check className="text-white/80" size={20} />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
};

export default ProFeaturesList;