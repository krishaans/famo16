import React from 'react';
import { Link } from 'react-router-dom';

interface FooterSection {
  title: string;
  links: Array<{
    name: string;
    path: string;
  }>;
}

const sections: FooterSection[] = [
  {
    title: 'Company',
    links: [
      { name: 'About Us', path: '/about-us' },
      { name: 'Contact Us', path: '/contact-us' },
    ],
  },
  {
    title: 'Features',
    links: [
      { name: 'Today Prices', path: '/today-prices' },
      { name: 'How to Farm', path: '/how-to-farm' },
      { name: 'Weather', path: '/weather' },
    ],
  },
  {
    title: 'Market',
    links: [
      { name: 'Buy', path: '/buy' },
      { name: 'Sell', path: '/sell' },
      { name: 'Shop', path: '/shop' },
    ],
  },
];

const FooterLinks: React.FC = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {sections.map((section) => (
        <div key={section.title}>
          <h3 className="font-semibold text-white mb-4">{section.title}</h3>
          <ul className="space-y-2">
            {section.links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;