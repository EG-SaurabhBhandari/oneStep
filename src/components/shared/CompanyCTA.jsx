import React from "react";
import { useTranslation } from 'react-i18next';

export default function CompanyCTA({
  showTag = true,
  tagTextKey = "companyCTA.tagText",
  titleKey = "companyCTA.title",
  descriptionKey = "companyCTA.description",
  buttonTextKey = "companyCTA.buttonText",
  buttonLink = "/company-contact",
  // Fallback props for backward compatibility
  tagText,
  title,
  description,
  buttonText,
}) {
  const { t } = useTranslation();

  // Use translation keys first, then fallback to props, then to defaults
  const displayTagText = tagText || t(tagTextKey);
  const displayTitle = title || t(titleKey);
  const displayDescription = description || t(descriptionKey);
  const displayButtonText = buttonText || t(buttonTextKey);

  return (
    <div className="relative max-w-4xl mx-auto my-16 px-4 sm:px-6 lg:px-8">
      {/* Background wall */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-light to-white rounded-lg shadow-inner opacity-30"></div>

      {/* Ropes and dots */}
      <div className="absolute -top-8 left-1/4 w-3 h-3 bg-brand-navy rounded-full shadow-md"></div>
      <div className="absolute -top-8 right-1/4 w-3 h-3 bg-brand-navy rounded-full shadow-md"></div>

      <div className="absolute -top-8 left-1/4 origin-bottom">
        <div
          className="w-1 bg-gradient-to-b from-white to-amber-900"
          style={{
            height: "60px",
            transform: "rotate(-15deg)",
            transformOrigin: "top center",
          }}
        />
      </div>
      <div className="absolute -top-8 right-1/4 origin-bottom">
        <div
          className="w-1 bg-gradient-to-b from-white to-amber-900"
          style={{
            height: "120px",
            transform: "rotate(15deg)",
            transformOrigin: "top center",
          }}
        />
      </div>

      {/* Main board */}
      <section
        className="relative bg-gradient-to-br from-brand-light to-white border-2 border-brand-primary rounded-xl p-6 md:p-10 shadow-2xl"
        style={{
          transform: "rotate(-1deg)",
        }}
      >
        {/* Corner holes */}
        <div className="absolute -top-2 left-8 w-4 h-4 bg-gray-300 rounded-full border-2 border-gray-400 shadow-inner" />
        <div className="absolute -top-2 right-8 w-4 h-4 bg-gray-300 rounded-full border-2 border-gray-400 shadow-inner" />
        <div className="absolute -top-1 left-10 w-1 h-2 bg-gray-400 rounded-full" />
        <div className="absolute -top-1 right-10 w-1 h-2 bg-gray-400 rounded-full" />

        {/* Optional red tag */}
        {showTag && (
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg border border-red-400 transform rotate-1 whitespace-nowrap">
            {displayTagText}
          </div>
        )}

        {/* Content */}
        <div style={{ transform: "rotate(1deg)" }}>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-brand-navy mb-6">
            {displayTitle}
          </h2>
          <p className="text-gray-700 text-center max-w-2xl mx-auto mb-8 text-sm sm:text-base md:text-lg leading-relaxed">
            {displayDescription.split("\n").map((line, idx) => (
              <span key={idx}>
                {line}
                <br />
              </span>
            ))}
          </p>
          <div className="text-center">
            <a href={buttonLink}
            className="relative inline-block text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg overflow-hidden group">
              <span className="relative z-10">{displayButtonText}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-navy z-0"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-navy to-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
            </a>
          </div>
        </div>

        {/* Overlay textures */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-transparent opacity-10 rounded-xl pointer-events-none" />
        <div className="absolute -bottom-4 left-4 right-4 h-4 bg-black opacity-10 rounded-full blur-sm" />
      </section>

      {/* Side decorations */}
      <div className="absolute top-16 -left-2 w-1 h-8 bg-amber-900 opacity-30 rotate-12 rounded-full" />
      <div className="absolute top-16 -right-2 w-1 h-8 bg-amber-900 opacity-30 -rotate-12 rounded-full" />
    </div>
  );
}
