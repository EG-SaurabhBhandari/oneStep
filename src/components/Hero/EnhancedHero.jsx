import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaShoePrints } from "react-icons/fa";
import WalkingFootsteps from './WalkingFootsteps';
import LanguageSelector from '../LanguageSelector'; 

const AnimatedText = ({ text, className = "", delay = 0, scrollScale = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scaleValue = scrollScale ? Math.max(1, 1 + scrollY * 0.002) : 1;
  const opacity = Math.max(0.3, 1 - scrollY * 0.003);

  return (
    <span
      className={`inline-block transition-all duration-1000 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{
        transform: scrollScale 
          ? `translateY(${isVisible ? 0 : 32}px) scale(${scaleValue})`
          : `translateY(${isVisible ? 0 : 32}px)`,
        opacity: isVisible ? opacity : 0
      }}
    >
      {text}
    </span>
  );
};

// Parallax Background Component
const ParallaxBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      ></div>
      <div 
        className="absolute inset-0 bg-gradient-to-tl from-transparent via-blue-50 to-purple-50 opacity-60"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      ></div>
    </div>
  );
};

const EnhancedHero = () => {
  const [scrollY, setScrollY] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-white text-gray-800 min-h-screen">
      <ParallaxBackground />
      
      {/* Language Selector - Fixed position at top right */}
      <div className="fixed top-6 right-6 z-50">
        <LanguageSelector />
      </div>
      
      <section className="relative min-h-screen overflow-hidden">
        <WalkingFootsteps />

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Headline with scroll scaling */}
            <div className="mb-8">
              <AnimatedText
                text={t('hero.connecting')}
                className="text-2xl md:text-3xl font-medium text-gray-700 block mb-2"
                delay={300}
              />
              <AnimatedText
                text={t('hero.jobPlacementService')}
                className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-brand-primary via-purple-600 to-brand-navy bg-clip-text text-transparent block mb-4"
                delay={600}
                scrollScale={true}
              />
            </div>

            {/* Hero Motivational Subtext */}
            <AnimatedText
              text={t('hero.motivationalText1')}
              className="text-lg md:text-xl text-blue-700 font-semibold mb-4 block"
              delay={800}
            />
            <AnimatedText
              text={t('hero.motivationalText2')}
              className="text-lg md:text-xl text-purple-700 font-medium mb-8 block"
              delay={1000}
            />

            {/* Subtitle with fade effect on scroll */}
            <div 
              style={{
                opacity: Math.max(0.4, 1 - scrollY * 0.002),
                transform: `translateY(${scrollY * 0.1}px)`
              }}
            >
              <AnimatedText
                text={t('hero.welcomeDescription')}
                className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 block"
                delay={1200}
              />
            </div>

            {/* CTA Buttons with hover animations */}
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              style={{ 
                opacity: 0, 
                animation: 'fadeInUp 1s ease-out 1.5s forwards',
                transform: `translateY(${scrollY * 0.1}px)`
              }}
            >
              <button className="group px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-navy text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <span className="relative z-10">{t('hero.cta.jobSeekers')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-navy to-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="group px-8 py-4 bg-gradient-to-r from-brand-navy to-brand-primary text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <span className="relative z-10">{t('hero.cta.companies')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-navy opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* About Us Section with scroll effects */}
            <div 
              style={{
                opacity: Math.max(0.3, 1 - scrollY * 0.003),
                transform: `translateY(${scrollY * 0.15}px)`
              }}
            >
              <AnimatedText
                text={t('hero.aboutTitle')}
                className="text-xl font-semibold text-gray-700 mb-2 block"
                delay={1600}
              />
              <AnimatedText
                text={t('hero.aboutDescription')}
                className="text-base text-gray-600 leading-relaxed block"
                delay={1800}
              />
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          style={{
            opacity: Math.max(0, 1 - scrollY * 0.01),
            transform: `translateX(-50%) translateY(${scrollY * 0.5}px)`
          }}
        >
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center relative">
            <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2 animate-bounce"></div>
            <div className="absolute -bottom-8 text-xs text-gray-500 whitespace-nowrap animate-pulse">
              {t('hero.scrollIndicator')}
            </div>
          </div>
        </div>
      </section>      
    </div>
  );
};

export default EnhancedHero;
