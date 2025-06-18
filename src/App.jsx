import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './i18n/config'; // Import i18n configuration
import Home from './pages/Home';
import PageTransition from './components/shared/PageTransition';
import Contact from './pages/Contact';
import Philosophy from './pages/Philosophy'
import CompanyInfo from './pages/CompanyInfo';
import CeoGreeting from './pages/CeoGreeting';
import Service from './pages/Service';
import Teams from './pages/Teams';
import Student from './pages/Student';
import CompanyContact from './pages/CompanyContact';
import TranslationService from './pages/TranslationService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Privacy from './pages/Privacy';
import FAQPage from './pages/FAQPage';
import RecruitmentPage from './pages/RecruitmentPage';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Loading component
const LoadingSpinner = () => {
    const { t } = useTranslation();

    return (
        <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900">
            <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <div className="text-lg text-gray-600 dark:text-gray-300">
                    {t ? t('common.loading') : 'Loading...'}
                </div>
            </div>
        </div>
    );
};

export default function App() {
    const { ready } = useTranslation();

    // Show loading spinner while i18n is initializing
    if (!ready) {
        return <LoadingSpinner />;
    }

    return (
        <Router>
            <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <PageTransition>
                                <Home />
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/contact"
                        element={
                            <PageTransition>
                                <Contact />
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/philosophy"
                        element={
                            <PageTransition>
                                <Philosophy />
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/company"
                        element={
                            <PageTransition>
                                <CompanyInfo />
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/greeting"
                        element={
                            <PageTransition>
                                <CeoGreeting />
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/services"
                        element={
                            <PageTransition>
                                <Service />
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/teams"
                        element={
                            <PageTransition>
                                <Teams />
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/company-contact"
                        element={
                            <PageTransition>
                                <CompanyContact />
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/students"
                        element={
                            <PageTransition>
                                <Student />
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/translation"
                        element={
                            <PageTransition>
                                <TranslationService />
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/privacy_policy"
                        element={
                            <PageTransition>
                                <PrivacyPolicy />
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/privacy"
                        element={
                            <PageTransition>
                                <Privacy />
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/faq"
                        element={
                            <PageTransition>
                                <FAQPage />
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/recruitment"
                        element={
                            <PageTransition>
                                <RecruitmentPage />
                            </PageTransition>
                        }
                    />
                </Routes>
            </Suspense>
        </Router>
    );
}