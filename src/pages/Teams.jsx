import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/shared/Footer';
import InfoTitle from '../components/shared/InfoTitle';
import TeamGrid from '../components/TeamMembers/TeamGrid';
import RishiImage from '../image/rishi.png';
import Member2 from '../image/sailendra.png';

const Teams = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      id: 1,
      image: RishiImage,
      nameJp: t('teamsPage.members.0.nameJp'),
      nameEn: t('teamsPage.members.0.nameEn'),
      titleJp: t('teamsPage.members.0.titleJp'),
      aboutJp: t('teamsPage.members.0.aboutJp')
    },
    {
      id: 2,
      image: Member2,
      nameJp: t('teamsPage.members.1.nameJp'),
      nameEn: t('teamsPage.members.1.nameEn'),
      titleJp: t('teamsPage.members.1.titleJp'),
      aboutJp: t('teamsPage.members.1.aboutJp')
    }
  ];

  return (
    <>
      <Navbar />

      <InfoTitle
        backgroundImage="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=1600&h=600&fit=crop&crop=center"
        title={t('teamsPage.infoTitle.title')}
        description={t('teamsPage.infoTitle.description')}
        highlightText={t('teamsPage.infoTitle.highlightText')}
      />
      
      <div className="bg-white min-h-screen">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <TeamGrid members={teamMembers} />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Teams;
