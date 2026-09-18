import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/Register';
import SignIn from './pages/Login';
import Dashboard from './pages/Dashboard';
import Reveal from './components/ScrollAnimation';

function AppContent() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#FFFBF1] text-[#850E35] flex flex-col selection:bg-[#E36A6A]/25 selection:text-[#850E35] overflow-x-hidden">
      <Navbar />
      <Reveal key={location.pathname} className="flex-1 flex flex-col">
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/dashboard" element={<Dashboard />} />
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
