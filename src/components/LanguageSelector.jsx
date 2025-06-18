// src/components/LanguageSelector.jsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDownIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { code: "en", name: "English", flag: "🇺🇸" },
        { code: "ja", name: "日本語", flag: "🇯🇵" },
    ];

    const currentLanguage = languages.find((lang) => lang.code === i18n.language);

    const handleLanguageChange = (languageCode) => {
        i18n.changeLanguage(languageCode);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700"
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                <GlobeAltIcon className="w-4 h-4 mr-2" />
                <span className="mr-1">{currentLanguage?.flag}</span>
                <span className="hidden sm:inline">{currentLanguage?.name}</span>
                <ChevronDownIcon className="w-4 h-4 ml-2 -mr-1" />
            </button>

            {isOpen && (
                <div className="absolute right-0 z-50 w-48 mt-2 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800 dark:border-gray-600">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                        {languages.map((language) => (
                            <button
                                key={language.code}
                                onClick={() => handleLanguageChange(language.code)}
                                className={`${i18n.language === language.code
                                        ? "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white"
                                        : "text-gray-700 dark:text-gray-200"
                                    } group flex w-full items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700`}
                                role="menuitem"
                            >
                                <span className="mr-3">{language.flag}</span>
                                <span>{language.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;
