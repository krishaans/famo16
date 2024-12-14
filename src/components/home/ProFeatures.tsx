import React from 'react';
import { useNavigate } from 'react-router-dom';
import { proFeatures } from '../../constants/features';
import FeatureCard from './features/FeatureCard';
import ProFeaturesList from './features/ProFeaturesList';

const ProFeatures: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl text-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold font-codec mb-4">Pro Features</h2>
        <p className="text-xl mb-8">Unlock advanced features for 2000 LKR per month</p>
        <ProFeaturesList />
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {proFeatures.map((feature) => (
          <FeatureCard
            key={feature.name}
            {...feature}
            onClick={() => navigate(feature.path)}
            variant="secondary"
          />
        ))}
      </div>

      <div className="text-center mt-8">
        <button 
          onClick={() => navigate('/future-predictions')}
          className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Start 7-Day Free Trial
        </button>
      </div>
    </div>
  );
};

export default ProFeatures;