import React, { createContext, useContext, useState } from 'react';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (lang: string) => void;
  translate: (key: string) => string;
}

const translations: Translations = {
  en: {
    home: 'Home',
    todayPrices: 'Today Prices',
    howToFarm: 'How to Farm',
    buy: 'Buy',
    sell: 'Sell',
    aboutUs: 'About Us',
    vision: 'Vision',
    mission: 'Mission',
    // Add more translations as needed
  },
  si: {
    home: 'මුල් පිටුව',
    todayPrices: 'අද මිල ගණන්',
    howToFarm: 'වගා කරන්නේ කෙසේද',
    buy: 'මිලදී ගන්න',
    sell: 'විකුණන්න',
    aboutUs: 'අප ගැන',
    vision: 'දැක්ම',
    mission: 'මෙහෙවර',
  },
  ta: {
    home: 'முகப்பு',
    todayPrices: 'இன்றைய விலைகள்',
    howToFarm: 'பயிரிடுவது எப்படி',
    buy: 'வாங்க',
    sell: 'விற்க',
    aboutUs: 'எங்களை பற்றி',
    vision: 'தொலைநோக்கு',
    mission: 'நோக்கம்',
  },
};

const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: 'en',
  setLanguage: () => {},
  translate: () => '',
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const translate = (key: string): string => {
    return translations[currentLanguage]?.[key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        setLanguage: setCurrentLanguage,
        translate,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);