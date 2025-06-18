import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/shared/Footer';
import InfoTitle from '../components/shared/InfoTitle';

export default function Philosophy() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />

      <InfoTitle
        backgroundImage="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1600&h=600&fit=crop&crop=center"
        title={t('philosophy.infoTitle.title')}
        description={t('philosophy.infoTitle.description')}
        highlightText={t('philosophy.infoTitle.highlightText')}
      />

      <main className="max-w-4xl mx-auto px-4 py-16 space-y-16 text-gray-800">

        {/* CEO Message */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('philosophy.ceoMessage.title')}</h2>
          <blockquote className="text-lg leading-relaxed border-l-4 border-blue-500 pl-4 italic">
            {t('philosophy.ceoMessage.quote')}
          </blockquote>
          <p className="mt-4 font-semibold">{t('philosophy.ceoMessage.signature')}</p>
        </section>

        {/* Mission */}
        <section>
          <h2 className="text-xl font-bold mb-2">{t('philosophy.mission.title')}</h2>
          <p className="text-blue-600 font-semibold mb-4">{t('philosophy.mission.statement')}</p>
          <p className="mb-2">
            {t('philosophy.mission.description')}
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li dangerouslySetInnerHTML={{ __html: t('philosophy.mission.points.0') }} />
            <li dangerouslySetInnerHTML={{ __html: t('philosophy.mission.points.1') }} />
          </ul>
          <p className="mt-2">{t('philosophy.mission.conclusion')}</p>
        </section>

        {/* Vision */}
        <section>
          <h2 className="text-xl font-bold mb-2">{t('philosophy.vision.title')}</h2>
          <p className="text-indigo-600 font-semibold mb-4">{t('philosophy.vision.statement')}</p>
          <p>
            {t('philosophy.vision.description')}
          </p>
        </section>

        {/* Promises */}
        <section>
          <h2 className="text-xl font-bold mb-6 text-center">{t('philosophy.promises.title')}</h2>
          <ul className="space-y-4 text-center">
            <li>{t('philosophy.promises.items.0')}</li>
            <li>{t('philosophy.promises.items.1')}</li>
            <li>{t('philosophy.promises.items.2')}</li>
          </ul>
        </section>

        {/* Slogan */}
        <section className="text-center space-y-6">
          <h2 className="text-xl font-bold">{t('philosophy.slogan.title')}</h2>
          <p className="text-2xl text-blue-700 font-semibold">{t('philosophy.slogan.statement')}</p>
          <p>
            {t('philosophy.slogan.description')}
          </p>
          <p className="font-semibold">
            {t('philosophy.slogan.conclusion')}
          </p>
        </section>

      </main>

      <Footer />
    </>
  );
}
