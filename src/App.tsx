import Navbar from './sections/Navbar';
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
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-navy-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
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

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;