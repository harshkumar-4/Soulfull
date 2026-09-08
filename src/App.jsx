import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderNav from './components/HeaderNav';
import MobileNavDrawer from './components/MobileNavDrawer';
import Footer from './components/Footer';
import HomeSanctuary from './pages/HomeSanctuary';
import OurStory from './pages/OurStory';
import WhySoulfulI from './pages/WhySoulfulI';
import LivingOfferings from './pages/LivingOfferings';
import EQAuditDetail from './pages/EQAuditDetail';
import EQAuditQuestionFlow from './pages/EQAuditQuestionFlow';
import EQAuditSynthesis from './pages/EQAuditSynthesis';
import JoinCommunity from './pages/JoinCommunity';
import JoinConfirmation from './pages/JoinConfirmation';
import Wayfinding404 from './pages/Wayfinding404';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen flex flex-col justify-between bg-surface text-on-surface antialiased">
        {/* Global Header Navigation */}
        <HeaderNav onOpenMobileMenu={() => setIsMobileMenuOpen(true)} />

        {/* Mobile Slide-out Menu Drawer */}
        <MobileNavDrawer
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />

        {/* Main Application Routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomeSanctuary />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/why-soulfuli" element={<WhySoulfulI />} />
            <Route path="/living-offerings" element={<LivingOfferings />} />
            <Route path="/living-offerings/eq-audit" element={<EQAuditDetail />} />
            <Route path="/eq-audit/assessment" element={<EQAuditQuestionFlow />} />
            <Route path="/eq-audit/results" element={<EQAuditSynthesis />} />
            <Route path="/join-community" element={<JoinCommunity />} />
            <Route path="/join-community/confirmation" element={<JoinConfirmation />} />
            <Route path="/404" element={<Wayfinding404 />} />
            <Route path="*" element={<Wayfinding404 />} />
          </Routes>
        </main>

        {/* Global Sanctuary Footer */}
        <Footer />
      </div>
    </Router>
  );
}
