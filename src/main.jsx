import React from 'react';
import ReactDOM from 'react-dom/client';
import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import App from './components/App';
import './index.scss';
import './assets/fonts/fonts.scss';
import 'flag-icon-css/css/flag-icons.min.css';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'fr', 'es', 'ko'],
    fallbackLng: 'en',
    lng: 'en', // Add this line to force the language for testing
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/Portfolio_SS/assets/locales/{{lng}}/translation.json',
    },
    react: { useSuspense: false },
  });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
