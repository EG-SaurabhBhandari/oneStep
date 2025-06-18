import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isChanging, setIsChanging] = useState(false);

  const languages = [
    { code: 'ja', name: 'JP', flag: '🇯🇵', fullName: '日本語' },
    { code: 'en', name: 'EN', flag: '🇺🇸', fullName: 'English' }
  ];

  const handleLanguageChange = async (languageCode) => {
    if (i18n.language === languageCode || i18n.language.startsWith(languageCode)) {
      return; // Don't change if already selected
    }

    setIsChanging(true);
    
    try {
      await i18n.changeLanguage(languageCode);
      
      // Add a small delay for visual feedback
      setTimeout(() => {
        setIsChanging(false);
      }, 300);
    } catch (error) {
      console.error('Language change failed:', error);
      setIsChanging(false);
    }
  };

  const currentLanguage = i18n.language || 'ja';

  return (
    <div className="flex items-center bg-gray-50 rounded-full p-1 relative">
      {/* Loading indicator */}
      {isChanging && (
        <div className="absolute inset-0 bg-gray-50 rounded-full flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {languages.map((language) => {
        const isActive = currentLanguage === language.code || currentLanguage.startsWith(language.code);
        
        return (
          <button
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            disabled={isChanging}
            className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-200 transform ${
              isActive
                ? 'bg-white text-indigo-600 shadow-sm hover:shadow-md scale-105'
                : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-100 hover:scale-105'
            } ${isChanging ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
            title={language.fullName}
          >
            <span className="flex items-center space-x-1">
              <span>{language.flag}</span>
              <span>{language.name}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;