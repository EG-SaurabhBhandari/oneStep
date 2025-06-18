import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/shared/Footer';
import FAQItem from '../components/shared/FAQItems';
import CompanyCTA from '../components/shared/CompanyCTA';
import faqData from '../data/faqData.json';
import InfoTitle from '../components/shared/InfoTitle';

export default function FAQPage() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('jobSeekers');

  const renderFAQItems = (list) =>
    list.map((item, index) => (
      <FAQItem key={index} question={item.question}>
        {item.answer}
      </FAQItem>
    ));

  return (
    <>
      <Navbar />
      <InfoTitle
        backgroundImage="https://images.pexels.com/photos/1887995/pexels-photo-1887995.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        title={t('faqPage.infoTitle.title')}
        description={t('faqPage.infoTitle.description')}
        highlightText={t('faqPage.infoTitle.highlightText')}
      />
      <div className="bg-white">
        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          {/* Tabs */}
          <div className="flex justify-center border-b border-gray-200 mb-12">
            <button
              onClick={() => setActiveTab('jobSeekers')}
              className={`py-3 px-8 text-lg font-semibold ${
                activeTab === 'jobSeekers'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-500 hover:text-blue-500'
              }`}
            >
              {t('faqPage.tabs.jobSeekers')}
            </button>
            <button
              onClick={() => setActiveTab('companies')}
              className={`py-3 px-8 text-lg font-semibold ${
                activeTab === 'companies'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-500 hover:text-blue-500'
              }`}
            >
              {t('faqPage.tabs.companies')}
            </button>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {activeTab === 'jobSeekers'
              ? renderFAQItems(faqData.faq.jobSeekers)
              : renderFAQItems(faqData.faq.companies)}
          </div>

          {/* CTA */}
          {activeTab === 'jobSeekers' ? (
            <CompanyCTA
              showTag={true}
              tagText={t('faqPage.cta.jobSeekers.tagText')}
              title={t('faqPage.cta.jobSeekers.title')}
              description={t('faqPage.cta.jobSeekers.description')}
              buttonLink="https://docs.google.com/forms/d/e/1FAIpQLSdh6uGf2hrGfCRTZUuTFYR6abVvsrEHH77TrBDEsXg2IPDSLA/viewform"
              buttonText={t('faqPage.cta.jobSeekers.buttonText')}
            />
          ) : (
            <CompanyCTA
              showTag={true}
              tagText={t('faqPage.cta.companies.tagText')}
              title={t('faqPage.cta.companies.title')}
              description={t('faqPage.cta.companies.description')}
              buttonLink="/company-contact"
              buttonText={t('faqPage.cta.companies.buttonText')}
            />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
