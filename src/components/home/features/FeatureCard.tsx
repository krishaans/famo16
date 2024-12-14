import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  name: string;
  icon: LucideIcon;
  description?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  name,
  icon: Icon,
  description,
  onClick,
  variant = 'primary',
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary text-white hover:bg-secondary';
      case 'secondary':
        return 'bg-white hover:shadow-xl';
      case 'outline':
        return 'bg-white border-2 border-dashed border-primary/30';
      default:
        return 'bg-primary text-white hover:bg-secondary';
    }
  };

  return (
    <button
      onClick={onClick}
      className={`p-6 rounded-xl shadow-lg transition-all duration-300 ${getVariantClasses()}`}
    >
      <Icon className={`w-8 h-8 mx-auto mb-4 ${variant === 'secondary' ? 'text-primary' : ''}`} />
      <h3 className="font-codec text-lg text-center mb-2">{name}</h3>
      {description && <p className="text-center text-sm opacity-80">{description}</p>}
    </button>
  );
};

export default FeatureCard;