import React from 'react';
import { useNavigate } from 'react-router-dom';
import { coreFeatures } from '../../constants/features';
import FeatureCard from './features/FeatureCard';

const CoreFeatures: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="text-3xl font-bold text-primary mb-6 font-codec">Core Features</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {coreFeatures.map((feature) => (
          <FeatureCard
            key={feature.name}
            {...feature}
            onClick={() => navigate(feature.path)}
            variant="secondary"
          />
        ))}
      </div>
    </div>
  );
};

export default CoreFeatures;