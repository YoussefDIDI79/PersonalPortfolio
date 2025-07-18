import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import frTranslations from '../locales/fr.json';
import arTranslations from '../locales/ar.json';
import enTranslations from '../locales/en.json';

const resources = {
  fr: {
    translation: frTranslations
  },
  ar: {
    translation: arTranslations
  },
  en: {
    translation: enTranslations
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr', // default language
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;
