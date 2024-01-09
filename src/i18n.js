import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // use the http backend as the i18next backend
  .use(Backend)
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next
  .use(initReactI18next)
  // init i18next
  .init({
    lng: localStorage.getItem("lng") || 'de',
    loadPath: 'https://jblezi.github.io/biernath-legal-portfolio/public/locales/{{lng}}/translation.json',
    fallbackLng: 'de', // fallback language
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for React as it escapes by default
    }
  });

export default i18n;
