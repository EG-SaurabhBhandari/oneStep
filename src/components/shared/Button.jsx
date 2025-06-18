import React from 'react';
import { useTranslation } from 'react-i18next';

const Button = ({ href = "/recruitment", children, translationKey = "button.recruitment", className = "" }) => {
  const { t } = useTranslation();

  // Use children prop if provided, otherwise use translation
  const buttonText = children || t(translationKey);

  return (
    <a
      href={href}
      className={`group px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-navy text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 relative overflow-hidden ${className}`}
    >
      <span className="relative z-10">{buttonText}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy to-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </a>
  );
};

export default Button;
