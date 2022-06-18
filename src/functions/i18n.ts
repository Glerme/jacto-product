import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'Welcome to React': 'Welcome to React and react-i18next',
    },
  },
  pt_BR: {
    translation: {
      'Welcome to React': 'Bem Vindo ao React e react-i18next',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'pt_BR',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
