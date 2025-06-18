import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';
import CompanyContactForm from './CompanyContactForm';
import JobApplicationForm from './JobApplicationFrom';

const ContactModal = ({ selectedType, onClose }) => {
  // Always call ALL hooks at the top level, before any early returns or conditional logic
  const { t, ready } = useTranslation();

  // Always call useEffect, but make it conditional inside
  useEffect(() => {
    if (selectedType) {
      // Lock body scroll when modal is open
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'auto';
      };
    }
  }, [selectedType]);

  // Early return after all hooks are called
  if (!selectedType) return null;

  // Fallback titles in case translation fails
  const fallbackTitles = {
    company: "企業様用 お問い合わせフォーム",
    student: "お仕事をお探しの方用 お問い合わせフォーム"
  };

  // Get modal title with translation support
  const getModalTitle = () => {
    if (!ready) {
      return fallbackTitles[selectedType] || fallbackTitles.company;
    }

    try {
      const translationKey = selectedType === "company" 
        ? 'contactModal.companyTitle' 
        : 'contactModal.studentTitle';
      
      const translation = t(translationKey);
      
      // If translation key is returned as-is, use fallback
      return translation !== translationKey ? translation : fallbackTitles[selectedType];
    } catch (error) {
      console.warn('Translation not available for modal title, using fallback');
      return fallbackTitles[selectedType] || fallbackTitles.company;
    }
  };

  // Get close button aria label
  const getCloseLabel = () => {
    if (!ready) return "Close modal";
    
    try {
      const translation = t('contactModal.closeLabel');
      return translation !== 'contactModal.closeLabel' ? translation : "Close modal";
    } catch (error) {
      return "Close modal";
    }
  };

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 m-4 animate-fadeIn">
        {/* Modal Header */}
        <div className="mb-4 border-b pb-4">
          <h2 className="text-xl font-bold text-gray-800 pr-12">
            {getModalTitle()}
          </h2>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            aria-label={getCloseLabel()}
            title={getCloseLabel()}
          >
            <XMarkIcon className="h-6 w-6 text-gray-600 hover:text-gray-800 transition-colors duration-200" />
          </button>
        </div>

        {/* Modal Content */}
        <div>
          {selectedType === "company" && <CompanyContactForm />}
          {selectedType === "student" && <JobApplicationForm />}
        </div>
      </div>
    </div>
  );

  // Render modal into the root-level DOM node
  return createPortal(modalContent, document.body);
};

export default ContactModal;
