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

  // Get the members array from translations
  const membersData = t('teamsPage.members', { returnObjects: true });

  const teamMembers = [
    {
      id: 1,
      image: RishiImage,
      nameJp: membersData[0]?.nameJp || 'Rishi Baral',
      nameEn: membersData[0]?.nameEn || 'Rishi Baral',
      titleJp: membersData[0]?.titleJp || 'Co-founder & Global Collaboration Director',
      aboutJp: membersData[0]?.aboutJp || 'Default about text'
    },
    {
      id: 2,
      image: Member2,
      nameJp: membersData[1]?.nameJp || 'Sailendra Ranabhat',
      nameEn: membersData[1]?.nameEn || 'Sailendra Ranabhat',
      titleJp: membersData[1]?.titleJp || 'Director',
      aboutJp: membersData[1]?.aboutJp || 'Default about text'
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
