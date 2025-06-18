import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/shared/Footer';
import InfoTitle from '../components/shared/InfoTitle';
import AnimatedSection from '../components/shared/AnimatedSection';
import AnimatedFlowSection from '../components/shared/AnimatedFlowSection';
import StrengthsGrid from '../components/shared/StrengthsGrid';
import { CheckBadgeIcon, ClockIcon, DocumentTextIcon, LockClosedIcon, CheckCircleIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import CompanyCTA from '../components/shared/CompanyCTA';

export default function TranslationService() {
  const { t } = useTranslation();

  const strengths = [
    {
      icon: <CheckBadgeIcon className="h-12 w-12 text-blue-600" />,
      title: t('translationServicePage.strengths.items.0.title'),
      description: t('translationServicePage.strengths.items.0.description')
    },
    {
      icon: <ClockIcon className="h-12 w-12 text-blue-600" />,
      title: t('translationServicePage.strengths.items.1.title'),
      description: t('translationServicePage.strengths.items.1.description')
    },
    {
      icon: <DocumentTextIcon className="h-12 w-12 text-blue-600" />,
      title: t('translationServicePage.strengths.items.2.title'),
      description: t('translationServicePage.strengths.items.2.description')
    },
    {
      icon: <LockClosedIcon className="h-12 w-12 text-blue-600" />,
      title: t('translationServicePage.strengths.items.3.title'),
      description: t('translationServicePage.strengths.items.3.description')
    }
  ];

  // Data for supported fields and languages
  const fields = t('translationServicePage.supportedFields', { returnObjects: true });
  const languages = t('translationServicePage.supportedLanguages', { returnObjects: true });

  // Translation service flow data
  const translationSteps = t('translationServicePage.flow.steps', { returnObjects: true });
  const translationDescriptions = t('translationServicePage.flow.descriptions', { returnObjects: true });

  return (
    <>
      <Navbar />

      {/* --- HERO SECTION --- */}
      <div className="relative">
        <InfoTitle
          backgroundImage="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1600&h=600&fit=crop&crop=center"
          title={t('translationServicePage.infoTitle.title')}
          description={t('translationServicePage.infoTitle.description')}
          highlightText={t('translationServicePage.infoTitle.highlightText')}
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20 space-y-24 text-gray-800 leading-relaxed">

          {/* --- SECTION 1: The Problem & Our Solution --- */}
          <AnimatedSection>
            <section className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection delay={200}>
                <div className="w-full h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt={t('translationServicePage.problemSection.imageAlt')}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </AnimatedSection>
              <AnimatedSection delay={400}>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {t('translationServicePage.problemSection.titlePrefix')}<span className="text-blue-600">{t('translationServicePage.problemSection.titleHighlight')}</span>{t('translationServicePage.problemSection.titleSuffix')}
                  </h2>
                  <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    {t('translationServicePage.problemSection.challenges', { returnObjects: true }).map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                  <p className="mt-4 text-gray-700">
                    {t('translationServicePage.problemSection.solution')}
                  </p>
                </div>
              </AnimatedSection>
            </section>
          </AnimatedSection>

          {/* --- SECTION 2: OUR FEATURES --- */}
          <StrengthsGrid strengths={strengths} /> 
          
          {/* --- SECTION 4: SERVICE FLOW - Using the reusable component --- */}
          <AnimatedFlowSection
            title={t('translationServicePage.flow.title')}
            steps={translationSteps}
            descriptions={translationDescriptions}
            colorScheme="indigo"
          />          

          {/* --- SECTION 3: Supported Fields & Languages --- */}
          <AnimatedSection>
            <section className="grid md:grid-cols-2 gap-16 items-start">
              <AnimatedSection delay={200}>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    {t('translationServicePage.supportedFieldsSection.titlePrefix')}<span className="text-blue-600">{t('translationServicePage.supportedFieldsSection.titleHighlight')}</span>
                  </h2>
                  <ul className="space-y-4">
                    {fields.map((item, index) => (
                      <AnimatedSection key={item} delay={400 + index * 100}>
                        <li className="flex items-start hover:bg-gray-50 p-2 rounded-lg transition-colors duration-300">
                          <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                          <span className="text-gray-700 text-lg">{item}</span>
                        </li>
                      </AnimatedSection>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={400}>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    {t('translationServicePage.supportedLanguagesSection.titlePrefix')}<span className="text-blue-600">{t('translationServicePage.supportedLanguagesSection.titleHighlight')}</span>
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {languages.map((lang, index) => (
                      <AnimatedSection key={lang} delay={600 + index * 100}>
                        <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold shadow-sm hover:bg-blue-200 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
                          {lang}
                        </span>
                      </AnimatedSection>
                    ))}
                  </div>
                  <AnimatedSection delay={800}>
                    <div className="mt-8 w-full h-60 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
                      <img
                        src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt={t('translationServicePage.supportedLanguagesSection.imageAlt')}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </AnimatedSection>
                </div>
              </AnimatedSection>
            </section>
          </AnimatedSection>
        </div>

        {/* --- ENHANCED CTA SECTION --- */}
        <CompanyCTA 
          showTag={true}
          title={t('translationServicePage.cta.title')}
          description={t('translationServicePage.cta.description')}
          buttonText={t('translationServicePage.cta.buttonText')}
          buttonLink="/contact"
        />
      </div>

      <Footer />
    </>
  );
}
