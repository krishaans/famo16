import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const socialLinks = [
  { Icon: Facebook, href: '#', label: 'Facebook' },
  { Icon: Twitter, href: '#', label: 'Twitter' },
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Youtube, href: '#', label: 'YouTube' },
];

const FooterSocial: React.FC = () => {
  return (
    <div>
      <h3 className="font-semibold text-white mb-4">Follow Us</h3>
      <div className="flex space-x-4">
        {socialLinks.map(({ Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
            aria-label={label}
          >
            <Icon size={24} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterSocial;