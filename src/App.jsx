import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingHireWidget } from './components/FloatingHireWidget';
import { ResumeModal } from './components/ResumeModal';
import { Toast } from './components/Toast';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { SkillsToolsPage } from './pages/SkillsToolsPage';
import { ContactPage } from './pages/ContactPage';

// Scroll to top helper component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const App = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  return (
    <ThemeProvider>
      <ScrollToTop />
      <div className="app-root">
        <Navbar
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenHire={() => {
            // Trigger contact navigation or widget
          }}
        />

        <main id="main-content">
          <Routes>
            <Route path="/" element={<HomePage onOpenResume={() => setIsResumeOpen(true)} />} />
            <Route path="/about" element={<AboutPage onOpenResume={() => setIsResumeOpen(true)} />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/experience" element={<ExperiencePage onOpenResume={() => setIsResumeOpen(true)} />} />
            <Route path="/skills-tools" element={<SkillsToolsPage />} />
            <Route path="/contact" element={<ContactPage onShowToast={showToast} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer onOpenResume={() => setIsResumeOpen(true)} />

        {/* Global Floating "Hire Me" Icon & Quick WhatsApp/Email Drawer */}
        <FloatingHireWidget onShowToast={showToast} />

        {/* Official Printable Resume Modal */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
          onShowToast={showToast}
        />

        {/* Global Toast Notifications */}
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </div>
    </ThemeProvider>
  );
};

export default App;
