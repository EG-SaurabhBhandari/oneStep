// src/i18n/config.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        // Remove lng: 'ja' - let the detector handle it
        fallbackLng: 'ja', // Changed from 'en' to 'ja' since that's your default
        debug: true, // Enable for debugging

        // Detection options - this is the key part for persistence
        detection: {
            order: ['localStorage', 'navigator', 'htmlTag'],
            lookupLocalStorage: 'i18nextLng',
            caches: ['localStorage'],
            excludeCacheFor: ['cimode'],
        },

        interpolation: {
            escapeValue: false,
        },

        backend: {
            loadPath: '/locales/{{lng}}/translation.json',
        },

        // Use supportedLngs instead of whitelist (whitelist is deprecated)
        supportedLngs: ['en', 'ja'],
        
        react: {
            useSuspense: false,
        },

        // Add these for better language handling
        load: 'languageOnly',
        cleanCode: true,
    });

export default i18n;
