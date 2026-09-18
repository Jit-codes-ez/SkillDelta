import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/Register';
import SignIn from './pages/Login';
import Dashboard from './pages/Dashboard';
import Documentation from './pages/Documentation';
import FAQSupport from './pages/FAQSupport';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Reveal from './components/ScrollAnimation';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function AppContent() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#FFFBF1] text-[#850E35] flex flex-col selection:bg-[#E36A6A]/25 selection:text-[#850E35] overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <Reveal key={location.pathname} className="flex-1 flex flex-col">
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/faq" element={<FAQSupport />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
        </main>
      </Reveal>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
