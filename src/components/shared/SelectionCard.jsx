import React from 'react';
import { useTranslation } from 'react-i18next';

const SelectionCard = ({ 
  icon, 
  title, 
  description, 
  onClick,
  titleKey,
  descriptionKey,
  ctaTextKey = "selectionCard.defaultCTA",
  className = ""
}) => {
  const { t } = useTranslation();

  // Use translation keys first, then fallback to props
  const displayTitle = titleKey ? t(titleKey) : title;
  const displayDescription = descriptionKey ? t(descriptionKey) : description;
  const displayCTAText = t(ctaTextKey);

  return (
    <button
      onClick={onClick}
      className={`group w-full max-w-md text-left bg-white-70 rounded-2xl shadow-lg p-8 border border-gray-200 hover:border-blue-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${className}`}
    >
      <div className="flex items-center gap-6">
        <div className="bg-blue-100 p-4 rounded-full">
          {icon}
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{displayTitle}</h2>
          <p className="mt-1 text-gray-600">{displayDescription}</p>
        </div>
      </div>
      <p className="mt-6 text-right font-semibold text-blue-600 group-hover:underline">
        {displayCTAText}
      </p>
    </button>
  );
};

export default SelectionCard;
