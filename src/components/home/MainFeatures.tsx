import React from 'react';
import { useNavigate } from 'react-router-dom';
import { mainFeatures } from '../../constants/features';
import FeatureCard from './features/FeatureCard';

const MainFeatures: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {mainFeatures.map((feature) => (
        <FeatureCard
          key={feature.name}
          {...feature}
          onClick={() => navigate(feature.path)}
          variant="primary"
        />
      ))}
    </div>
  );
};

export default MainFeatures;