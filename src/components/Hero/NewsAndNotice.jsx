import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Fallback news items in case translation fails
const fallbackNewsItems = [
  { date: '2025年7月1日', title: 'プライバシーポリシー更新のお知らせ', category: '新着情報' },
  { date: '2025年7月1日', title: 'ホームぺージリニューアルのお知らせ', category: '新着情報' },
  { date: '2025年7月1日', title: '年末年始のご案内', category: '新着情報' },
];

const NewsAndNotices = () => {
  const { t, ready } = useTranslation();

  // Get news items from translation with fallback
  let newsItems;
  try {
    newsItems = t('newsAndNotices.items', { returnObjects: true });
    // Check if newsItems is actually an array
    if (!Array.isArray(newsItems)) {
      newsItems = fallbackNewsItems;
    }
  } catch (error) {
    console.warn('Translation not available, using fallback news items');
    newsItems = fallbackNewsItems;
  }

  // If translation is not ready, use fallback
  if (!ready) {
    newsItems = fallbackNewsItems;
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-10">
          {/* News Section */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 border-b-2 border-red-600 pb-2">
              {ready ? t('newsAndNotices.title') : 'お知らせ'}
            </h2>
            <div className="space-y-6">
              {newsItems && newsItems.length > 0 ? (
                newsItems.map((news, index) => (
                  <motion.div
                    key={index}
                    className="border-b border-gray-200 pb-4"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    <div className="flex justify-between items-start">
                      <span className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded">
                        {news.category}
                      </span>
                      <span className="text-sm text-gray-500">{news.date}</span>
                    </div>
                    <h3 className="text-lg font-medium mt-2 text-gray-800 hover:text-blue-600 cursor-pointer transition-colors duration-300">
                      {news.title}
                    </h3>
                  </motion.div>
                ))
              ) : (
                <div className="text-center text-gray-500 py-8">
                  お知らせはありません
                </div>
              )}
            </div>
            
            {/* View All News Button */}
            <motion.div 
              className="mt-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">
                {ready ? t('newsAndNotices.viewAll') : 'すべてのお知らせを見る'}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsAndNotices;
