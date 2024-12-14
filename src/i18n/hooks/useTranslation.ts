import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { get } from 'lodash';

export const useTranslation = () => {
  const { currentLanguage, setLanguage, translations } = useContext(LanguageContext);

  const t = (key: string) => {
    return get(translations[currentLanguage], key) || get(translations.en, key) || key;
  };

  return {
    t,
    currentLanguage,
    setLanguage,
  };
};