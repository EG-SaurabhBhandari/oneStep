import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/shared/Footer";
import CEOImage from "../image/ceo.png";
import InfoTitle from "../components/shared/InfoTitle";
import BackgroundText from "../components/shared/BackgroundText";

const CEOInfo = () => {
  const { t } = useTranslation();
  
  return (
    <div className="flex-shrink-0 lg:w-1/3 text-center">
      <div className="relative overflow-hidden">
        <img
          src={CEOImage}
          alt={t('ceoGreeting.ceoInfo.altText')}
          className="w-72 h-auto mx-auto transition-transform duration-700 hover:scale-105 object-cover grayscale hover:grayscale-0"
        />
      </div>
      <h2 className="text-xl font-bold text-brand-navy mb-2">{t('ceoGreeting.ceoInfo.position')}</h2>
      <p className="text-2xl font-bold text-brand-navy mb-3">{t('ceoGreeting.ceoInfo.name')}</p>
      <div className="text-sm text-gray-700">
        <p>{t('ceoGreeting.ceoInfo.nationality')}</p>
        <p>{t('ceoGreeting.ceoInfo.languages')}</p>
      </div>
    </div>
  );
};

const CEOMessage = ({ isVisible }) => {
  const { t } = useTranslation();
  
  return (
    <div
      className={`lg:w-2/3 transform transition-all duration-1000 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="space-y-6 text-gray-800 leading-relaxed">
        <h4 className="text-lg font-semibold text-gray-900 mt-8 mb-3">{t('ceoGreeting.message.educationTitle')}</h4>
        <p style={{ whiteSpace: 'pre-line' }}>
          {t('ceoGreeting.message.educationContent')}
        </p>

        <h4 className="text-lg font-semibold text-gray-900 mt-8 mb-3">{t('ceoGreeting.message.messageTitle')}</h4>
        <p style={{ whiteSpace: 'pre-line' }}>
          {t('ceoGreeting.message.paragraph1')}
        </p>
        <p style={{ whiteSpace: 'pre-line' }}>
          {t('ceoGreeting.message.paragraph2')}
        </p>
        <p style={{ whiteSpace: 'pre-line' }}>
          {t('ceoGreeting.message.paragraph3')}
        </p>
        <p style={{ whiteSpace: 'pre-line' }}>
          {t('ceoGreeting.message.paragraph4')}
        </p>

        <div className="text-center pt-6 border-t border-gray-200">
          <p className="text-lg font-medium text-brand-navy">
            {t('ceoGreeting.message.closingMessage')}
          </p>
        </div>
      </div>
    </div>
  );
};

const CeoGreeting = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const ceoSection = document.getElementById("ceo-section");
      if (ceoSection) {
        const rect = ceoSection.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight && rect.bottom > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <InfoTitle
        backgroundImage="https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        title={t('ceoGreeting.infoTitle.title')}
        description={t('ceoGreeting.infoTitle.description')}
        highlightText={t('ceoGreeting.infoTitle.highlightText')}
      />

      <section
        id="ceo-section"
        className="relative w-full bg-cover bg-center bg-no-repeat py-16 lg:py-24 px-6 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />
        <BackgroundText text={t('ceoGreeting.backgroundText')} />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="backdrop-blur-sm rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            <CEOInfo />
            <CEOMessage isVisible={isVisible} />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CeoGreeting;
