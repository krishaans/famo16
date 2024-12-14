import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navigation } from '../constants/navigation';
import LanguageSelector from './language/LanguageSelector';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { translate } = useLanguage();

  return (
    <header className="bg-gradient-to-r from-primary to-secondary text-white shadow-lg relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/" 
            className="flex items-center gap-4 hover:opacity-90 transition-opacity shrink-0"
          >
            <img src="/src/assets/logo.svg" alt="Famo Logo" className="w-10 h-10" />
            <span className="font-codec text-2xl font-bold tracking-wide px-1">Famo.</span>
          </Link>

          <div className="flex items-center gap-4 md:hidden">
            <LanguageSelector />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <nav className="hidden md:flex items-center gap-2 lg:gap-4">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`py-2 px-3 rounded-lg transition-colors whitespace-nowrap font-codec text-sm lg:text-base ${
                  location.pathname === item.path
                    ? 'bg-white/10'
                    : 'hover:bg-white/5'
                }`}
              >
                {translate(item.translationKey)}
              </Link>
            ))}
            <LanguageSelector />
          </nav>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`py-2 px-3 rounded-lg transition-colors font-codec ${
                    location.pathname === item.path
                      ? 'bg-white/10'
                      : 'hover:bg-white/5'
                  }`}
                >
                  {translate(item.translationKey)}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;