import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/shared/Footer';
import InfoTitle from '../components/shared/InfoTitle';
import CompanyCTA from '../components/shared/CompanyCTA';
import AnimatedSection from '../components/shared/AnimatedSection';
import AnimatedFlowSection from '../components/shared/AnimatedFlowSection';
import StrengthsGrid from '../components/shared/StrengthsGrid';
import {CheckCircleIcon,UserGroupIcon,GlobeAltIcon,PuzzlePieceIcon} from '@heroicons/react/24/solid';

export default function Service() {
  const { t } = useTranslation();

  const strengths = [
    {
      icon: <UserGroupIcon className="h-12 w-12 text-indigo-500" />,
      title: t('servicePage.strengths.items.0.title'),
      description: t('servicePage.strengths.items.0.description')
    },
    {
      icon: <GlobeAltIcon className="h-12 w-12 text-indigo-500" />,
      title: t('servicePage.strengths.items.1.title'),
      description: t('servicePage.strengths.items.1.description')
    },
    {
      icon: <PuzzlePieceIcon className="h-12 w-12 text-indigo-500" />,
      title: t('servicePage.strengths.items.2.title'),
      description: t('servicePage.strengths.items.2.description')
    }
  ];

  const jobTypes = t('servicePage.jobTypes', { returnObjects: true });

  // Flow data
  const flowSteps = t('servicePage.flow.steps', { returnObjects: true });
  const flowDescriptions = t('servicePage.flow.descriptions', { returnObjects: true });

  const challenges = t('servicePage.challenges', { returnObjects: true });

  return (
    <>
      <Helmet>
        <title>{t('servicePage.helmet.title')}</title>
        <meta
          name="description"
          content={t('servicePage.helmet.description')}
        />
        <meta
          name="keywords"
          content={t('servicePage.helmet.keywords')}
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://your-domain.com/staffing" />
        <html lang="ja" />
      </Helmet>

      <Navbar />
      
      <InfoTitle
        backgroundImage="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&h=600&fit=crop&crop=center"
        title={t('servicePage.infoTitle.title')}
        description={t('servicePage.infoTitle.description')}
        highlightText={t('servicePage.infoTitle.highlightText')}
      />

      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20 space-y-24 text-gray-800 leading-relaxed">
          {/* 人材派遣とは */}
          <AnimatedSection>
            <section className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection delay={200}>
                <div className="w-full h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt={t('servicePage.whatIsStaffing.imageAlt')}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </AnimatedSection>
              <AnimatedSection delay={400}>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    <span className="text-indigo-600">{t('servicePage.whatIsStaffing.titleHighlight')}</span>{t('servicePage.whatIsStaffing.titleSuffix')}
                  </h2>
                  <p className="text-gray-700">
                    {t('servicePage.whatIsStaffing.description')}
                  </p>
                </div>
              </AnimatedSection>
            </section>
          </AnimatedSection>
          
          {/* 当社の強み */}
          <StrengthsGrid strengths={strengths} />
        
          {/* ご利用の流れ - Using the reusable component */}
          <AnimatedFlowSection
            title={t('servicePage.flow.title')}
            steps={flowSteps}
            descriptions={flowDescriptions}
            colorScheme="indigo"
          />

          {/* 課題と職種 */}
          <AnimatedSection>
            <section className="grid md:grid-cols-2 gap-16 items-start">
              <AnimatedSection delay={200}>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    {t('servicePage.challengesSection.titlePrefix')}<span className="text-indigo-600">{t('servicePage.challengesSection.titleHighlight')}</span>{t('servicePage.challengesSection.titleSuffix')}
                  </h2>
                  <ul className="space-y-4">
                    {challenges.map((item, index) => (
                      <AnimatedSection key={item} delay={400 + index * 100}>
                        <li className="flex items-start hover:bg-gray-50 p-2 rounded-lg transition-colors duration-300">
                          <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      </AnimatedSection>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={400}>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    {t('servicePage.jobTypesSection.titlePrefix')}<span className="text-indigo-600">{t('servicePage.jobTypesSection.titleHighlight')}</span>{t('servicePage.jobTypesSection.titleSuffix')}
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {jobTypes.map((type, index) => (
                      <AnimatedSection key={type} delay={600 + index * 100}>
                        <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full font-semibold shadow-sm hover:bg-indigo-200 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
                          {type}
                        </span>
                      </AnimatedSection>
                    ))}
                  </div>
                  <AnimatedSection delay={800}>
                    <div className="mt-8 w-full h-60 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
                      <img
                        src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt={t('servicePage.jobTypesSection.imageAlt')}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </AnimatedSection>
                </div>
              </AnimatedSection>
            </section>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection delay={200}>
            <CompanyCTA showTag={true} />
          </AnimatedSection>
        </div>
      </div>

      <Footer />
    </>
  );
}
