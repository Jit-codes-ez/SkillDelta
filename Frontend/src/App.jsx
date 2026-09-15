import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollAnimation from './components/ScrollAnimation';
import Home from './pages/Home';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFFBF1] text-[#850E35] flex flex-col selection:bg-[#E36A6A]/25 selection:text-[#850E35] overflow-x-hidden">
      {/* Permanent Fixed Header (outside animated transform tree to stay fixed on scroll) */}
      <Navbar />

      {/* Main Page Content with Scroll Animation */}
      <main className="flex-1">
        <ScrollAnimation duration={600}>
          <Home />
        </ScrollAnimation>
      </main>

      {/* Footer with Scroll Animation */}
      <ScrollAnimation threshold={0.1}>
        <Footer />
      </ScrollAnimation>
    </div>
  );
}
