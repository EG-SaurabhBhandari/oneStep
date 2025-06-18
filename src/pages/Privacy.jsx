import React from "react";
import { useTranslation } from 'react-i18next';
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/shared/Footer";
import InfoTitle from "../components/shared/InfoTitle";
import BackgroundText from "../components/shared/BackgroundText";

export default function Privacy() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />

      <InfoTitle
        backgroundImage="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&h=600&fit=crop&crop=center"
        title={t('privacy.infoTitle.title')}
        description={t('privacy.infoTitle.description')}
        highlightText={t('privacy.infoTitle.highlightText')}
      />

      <div className="relative max-w-4xl mx-auto px-4 py-10">
        <BackgroundText text={t('privacy.backgroundText')} top="top-2" />

        <h2 className="relative z-10 text-3xl font-bold mb-6">{t('privacy.basicPolicy.title')}</h2>
        <p className="relative z-10 mb-6 leading-loose">
          {t('privacy.basicPolicy.description')}
        </p>

        <h3 className="relative z-10 text-2xl font-semibold mb-3">{t('privacy.sections.usage.title')}</h3>
        <p className="mb-6">
          {t('privacy.sections.usage.content')}
        </p>

        <h3 className="relative z-10 text-2xl font-semibold mb-3">{t('privacy.sections.disclosure.title')}</h3>
        <p className="mb-2">{t('privacy.sections.disclosure.intro')}</p>
        <ol className="list-decimal pl-6 space-y-1 mb-6">
          <li>{t('privacy.sections.disclosure.items.0')}</li>
          <li>{t('privacy.sections.disclosure.items.1')}</li>
          <li>{t('privacy.sections.disclosure.items.2')}</li>
          <li>{t('privacy.sections.disclosure.items.3')}</li>
          <li>{t('privacy.sections.disclosure.items.4')}</li>
          <li>{t('privacy.sections.disclosure.items.5')}</li>
        </ol>
        <p className="mb-6">
          {t('privacy.sections.disclosure.conclusion')}
        </p>

        <h3 className="relative z-10 text-2xl font-semibold mb-3">{t('privacy.sections.management.title')}</h3>
        <p className="mb-6">
          {t('privacy.sections.management.content')}
        </p>

        <h3 className="relative z-10 text-2xl font-semibold mb-3">{t('privacy.sections.inquiry.title')}</h3>
        <p className="mb-6">
          {t('privacy.sections.inquiry.content')}
        </p>

        <h3 className="relative z-10 text-2xl font-semibold mb-3">{t('privacy.sections.compliance.title')}</h3>
        <p className="mb-6">
          {t('privacy.sections.compliance.content')}
        </p>

        <div className="text-right text-sm text-gray-500 mt-10">
          <div dangerouslySetInnerHTML={{ __html: t('privacy.signature') }} />
        </div>
      </div>

      <Footer />
    </>
  );
}
