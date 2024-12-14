import React from 'react';
import { ExternalLink } from 'lucide-react';

interface AdvertisementProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  sponsor: string;
}

const Advertisement: React.FC<AdvertisementProps> = ({
  title,
  description,
  imageUrl,
  link,
  sponsor
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1"
    >
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-2 right-2 bg-white/90 text-xs text-gray-600 px-2 py-1 rounded">
          Sponsored
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">By {sponsor}</span>
          <ExternalLink className="text-primary" size={20} />
        </div>
      </div>
    </a>
  );
};

export default Advertisement;