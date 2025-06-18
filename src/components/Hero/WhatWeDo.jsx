import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { services } from './ServiceData';
import { useFloatingPositions } from '../CustomHooks/useFloatingPositions';
import FloatingServiceItem from '../shared/FloatingServiceItem';
import BackgroundEffects from '../shared/BackgroundEffect';
import LanguageSelector from '../LanguageSelector';

const WhatWeDo = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const positions = useFloatingPositions(services.length);
  const { t } = useTranslation();

  // Transform services data with translations
  const translatedServices = services.map(service => ({
    ...service,
    title: t(service.titleKey),
    description: t(service.descriptionKey),
    points: t(service.pointsKey, { returnObjects: true })
  }));

  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4 min-h-screen overflow-hidden relative">
      <BackgroundEffects />

      {/* Language Selector - Fixed position at top right */}
      <div className="fixed top-6 right-6 z-50">
        <LanguageSelector />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-4">
            事業内容 <br />
            <span className='text-4xl'>What We Do</span>
          </h2>
        </div>

        <div className="relative h-[600px] bg-black/20 backdrop-blur-sm rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 rounded-3xl" />

          {translatedServices.map((service, index) => (
            <FloatingServiceItem
              key={index}
              service={service}
              position={positions[index]}
              isHovered={hoveredIndex === index}
              onHover={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20 pointer-events-none rounded-3xl" />
        </div>
      </div>

      <style>{`
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        .animate-shine {
          animation: shine 1s ease-out infinite;
        }
      `}</style>
    </section>
  );
};

export default WhatWeDo;
