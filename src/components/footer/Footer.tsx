import React from 'react';
import FooterLinks from './FooterLinks';
import FooterSocial from './FooterSocial';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-3">
            <FooterLinks />
          </div>
          <div>
            <FooterSocial />
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Famo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;