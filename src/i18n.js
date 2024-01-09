import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import your translations files
import translationEN from './locales/en/translation.json';
import translationDE from './locales/de/translation.json';

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  de: {
    translation: translationDE
  }
};

i18n
  .use(initReactI18next)
  // init i18next
  .init({
    resources,
    lng: localStorage.getItem("lng") || 'de',
    fallbackLng: 'de', // fallback language
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for React as it escapes by default
    }
  });

export default i18n;
