import { Routes, Route } from 'react-router';
import Navbar from './sections/Navbar';
import Footer from './sections/Footer';

// Home sections
import HeroSection from './sections/HeroSection';
import TrustBar from './sections/TrustBar';
import StatsBar from './sections/StatsBar';
import WhatWeDoSection from './sections/WhatWeDoSection';
import ServicesSection from './sections/ServicesSection';
import AIOperatingSystemsSection from './sections/AIOperatingSystemsSection';
import IndustriesSection from './sections/IndustriesSection';
import WhyChooseSection from './sections/WhyChooseSection';
import ProblemsSection from './sections/ProblemsSection';
import ProcessSection from './sections/ProcessSection';
import CaseStudiesSection from './sections/CaseStudiesSection';
import AboutSection from './sections/AboutSection';
import BlogSection from './sections/BlogSection';
import CTASection from './sections/CTASection';
import ContactSection from './sections/ContactSection';

// Pages
import ServicesPage from './pages/ServicesPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import BlogPage from './pages/BlogPage';

function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <StatsBar />
      <WhatWeDoSection />
      <ServicesSection />
      <AIOperatingSystemsSection />
      <IndustriesSection />
      <WhyChooseSection />
      <ProblemsSection />
      <ProcessSection />
      <CaseStudiesSection />
      <AboutSection />
      <BlogSection />
      <CTASection />
      <ContactSection />
    </main>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-navy-900 text-white overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;