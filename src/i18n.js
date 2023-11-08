import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          // Your default language translations go here
        },
      },
      de: {
        translation: {
          // Your German language translations go here
        },
      },
      // Add more languages here
    },
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
