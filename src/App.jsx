import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// ✅ Correct way to import components
import { HeroHeader } from '@/components/hero5-header'; // ✅ named export
import HeroSection from './components/hero-section'; // ✅ default export
import { Logo } from './components/logo';
import Features from './components/features-1';
import Testimonials from './components/testimonials';
import Pricing from './components/pricing';
import FooterSection from './components/footer';
import ContentSection from './components/content-7';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-black text-white">
        <HeroHeader />
      </div>
      <div className="bg-black text-white">
        <HeroSection />
      </div>
      <div className='bg-black text-white'>
        <ContentSection />
      </div>
      <div className="bg-black text-white">
        <Features />
      </div>
      <div className="bg-black text-white">
        <Pricing />
      </div>
      <div className="bg-black text-white">
        <Testimonials />
      </div>
      <div className="bg-black text-white">
        <FAQSection />
      </div>
      <div className="bg-black text-white">
        <FooterSection />
      </div>
    </>
  );
}

export default App;
