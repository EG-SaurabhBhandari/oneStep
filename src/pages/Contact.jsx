import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/shared/Footer";
import SelectionCard from "../components/shared/SelectionCard";
import ContactModal from "../components/shared/ContactModal";
import { BuildingOffice2Icon, UserIcon } from '@heroicons/react/24/solid';
import InfoTitle from "../components/shared/InfoTitle";
import BackgroundText from "../components/shared/BackgroundText";

export default function Contact() {
  const { t } = useTranslation();
  const [selectedType, setSelectedType] = useState(null);
  
  const closeModal = () => setSelectedType(null);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen relative">
      <Navbar />
      <InfoTitle
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=&h=600&fit=crop&crop=center"
        title={t('contact.infoTitle.title')}
        description={t('contact.infoTitle.description')}
        highlightText={t('contact.infoTitle.highlightText')}
      />
      
      {/* Selection Cards Section with Background Text */}
      <div className="relative flex flex-col items-center justify-center py-20 px-4 text-center overflow-hidden">
        {/* Background Text positioned behind the cards */}
        <BackgroundText 
          text={t('contact.backgroundText')} 
          top="top-1/4" 
          className="-translate-y-1/2 text-gray-200/30 z-0" 
        />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8">
          <SelectionCard
            onClick={() => setSelectedType("company")}
            icon={<BuildingOffice2Icon className="h-10 w-10 text-blue-700"/>}
            title={t('contact.selectionCards.company.title')}
            description={t('contact.selectionCards.company.description')}
          />
          <SelectionCard
            onClick={() => setSelectedType("student")}
            icon={<UserIcon className="h-10 w-10 text-blue-700"/>}
            title={t('contact.selectionCards.jobSeeker.title')}
            description={t('contact.selectionCards.jobSeeker.description')}
          />
        </div>
      </div>

      {/* Contact Information and Map Section */}
      <div className="max-w-6xl mx-auto px-6 py-20 relative">
        {/* Background Text for Access Section */}
        <BackgroundText 
          text={t('contact.accessSection.backgroundText')} 
          top="top-0" 
          className="text-blue-100/30 z-0" 
        />
        
        <section className="bg-white-30 p-8 md:p-12 rounded-2xl shadow-lg relative z-10">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">{t('contact.accessSection.title')}</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-blue-800 mb-4">{t('contact.contactInfo.title')}</h3>
                <div className="space-y-3">
                  <p className="flex items-center text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-lg">{t('contact.contactInfo.phone')}</span>
                  </p>
                  <p className="flex items-center text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-lg">{t('contact.contactInfo.email')}</span>
                  </p>
                </div>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-blue-800 mb-4">{t('contact.accessInfo.title')}</h3>
                <div style={{ whiteSpace: 'pre-line' }}>
                  <p className="text-gray-700">
                    {t('contact.accessInfo.address')}
                    <br />
                    <span className="text-sm text-gray-500">{t('contact.accessInfo.directions')}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[400px] rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.1234567890123!2d136.12345678901234!3d35.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDA3JzI0LjQiTiAxMzbCsDA3JzI0LjQiRQ!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t('contact.map.title')}
              ></iframe>
            </div>
          </div>
        </section>
      </div>

      {/* Modal Component */}
      <ContactModal 
        selectedType={selectedType} 
        onClose={closeModal} 
      />
      
      <Footer />
    </div>
  );
}
