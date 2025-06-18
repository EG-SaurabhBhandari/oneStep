import React from "react";
import { useTranslation } from 'react-i18next';
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/shared/Footer";
import InfoTitle from "../components/shared/InfoTitle";
import BackgroundText from "../components/shared/BackgroundText";

export default function CompanyInfo() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />

      {/* Hero Title Section */}
      <InfoTitle
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=600&fit=crop&crop=center"
        title={t('companyInfo.infoTitle.title')}
        description={t('companyInfo.infoTitle.description')}
        highlightText={t('companyInfo.infoTitle.highlightText')}
      />

      <div className="relative max-w-4xl mx-auto p-4">
        {/* Background Text for Company Section */}
        <BackgroundText text={t('companyInfo.backgroundText')} top="top-2" />

        {/* 会社概要 */}
        <h2 className="relative z-10 text-4xl font-bold bg-gradient-to-r from-blue via-blue-100 to-white bg-clip-text mb-4 mt-5">
          {t('companyInfo.companyProfile.title')} <br />
          <span className="text-xl">{t('companyInfo.companyProfile.subtitle')}</span>
        </h2>

        <table className="relative z-10 w-full text-left border border-gray-300 mb-10">
          <tbody>
            <tr className="border-b">
              <th className="p-2 bg-gray-100 w-1/4">{t('companyInfo.table.companyName.label')}</th>
              <td className="p-2">{t('companyInfo.table.companyName.value')}</td>
            </tr>
            <tr className="border-b">
              <th className="p-2 bg-gray-100">{t('companyInfo.table.established.label')}</th>
              <td className="p-2">{t('companyInfo.table.established.value')}</td>
            </tr>
            <tr className="border-b">
              <th className="p-2 bg-gray-100">{t('companyInfo.table.address.label')}</th>
              <td className="p-2">{t('companyInfo.table.address.value')}</td>
            </tr>
            <tr className="border-b">
              <th className="p-2 bg-gray-100">{t('companyInfo.table.representative.label')}</th>
              <td className="p-2">{t('companyInfo.table.representative.value')}</td>
            </tr>
            <tr className="border-b">
              <th className="p-2 bg-gray-100">{t('companyInfo.table.contact.label')}</th>
              <td className="p-2">{t('companyInfo.table.contact.value')}</td>
            </tr>
            <tr className="border-b">
              <th className="p-2 bg-gray-100">{t('companyInfo.table.business.label')}</th>
              <td className="p-2">
                <ul className="list-disc pl-5 space-y-1">
                  {t('companyInfo.table.business.items', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr className="border-b">
              <th className="p-2 bg-gray-100">{t('companyInfo.table.banks.label')}</th>
              <td className="p-2">{t('companyInfo.table.banks.value')}</td>
            </tr>
            <tr className="border-b">
              <th className="p-2 bg-gray-100">{t('companyInfo.table.licenses.label')}</th>
              <td className="p-2">{t('companyInfo.table.licenses.value')}</td>
            </tr>
            <tr className="border-b">
              <th className="p-2 bg-gray-100">{t('companyInfo.table.mission.label')}</th>
              <td className="p-2">{t('companyInfo.table.mission.value')}</td>
            </tr>
            <tr className="border-b">
              <th className="p-2 bg-gray-100">{t('companyInfo.table.vision.label')}</th>
              <td className="p-2">{t('companyInfo.table.vision.value')}</td>
            </tr>
            <tr>
              <th className="p-2 bg-gray-100">{t('companyInfo.table.logo.label')}</th>
              <td className="p-2">{t('companyInfo.table.logo.value')}</td>
            </tr>
          </tbody>
        </table>

        {/* アクセス */}
        <div className="relative mb-4">
          <BackgroundText text={t('companyInfo.access.backgroundText')} top="top-0" />
          <h2 className="relative z-10 text-xl font-semibold mb-4">{t('companyInfo.access.title')}</h2>
          <div className="relative z-10">
            <h3 className="font-semibold">{t('companyInfo.access.companyName')}</h3>
            <p>{t('companyInfo.access.address')}</p>
            <p>{t('companyInfo.access.directions')}</p>
          </div>
        </div>

        <div className="relative z-10 w-full h-96">
          <iframe
            title={t('companyInfo.map.title')}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3264.248255927196!2d136.90448897594996!3d35.100511361655705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60037bd490091749%3A0x4fa31faf33348089!2z44CSNDU3LTA4NDUgQWljaGksIE5hZ295YSwgTWluYW1pIFdhcmQsIEthbm5vbmNoxY0sIDUtY2jFjW1l4oiSMjUg6Kaz6Z-z44OT44OrIDNj!5e0!3m2!1sen!2sjp!4v1749386315753!5m2!1sen!2sjp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <Footer />
    </>
  );
}
