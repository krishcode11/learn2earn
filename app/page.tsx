'use client';

import { HeroSection } from './components/sections/hero';
import { FeaturesSection } from './components/sections/features';
import { CoursesGrid } from './components/courses/courses-grid';
import { StatsSection } from './components/sections/stats';
import { TestimonialsSection } from './components/sections/testimonials';
import { PricingSection } from './components/sections/pricing';
import { FAQSection } from './components/sections/faq';
import { CTASection } from './components/sections/cta';
import { Web3Provider } from './providers/web3-provider'

export default function Home() {
  return (
    <Web3Provider>
      <main className="min-h-screen bg-background text-foreground">
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(32,201,151,0.1),transparent_50%),radial-gradient(circle_at_0%_0%,rgba(255,122,90,0.1),transparent_50%)] pointer-events-none"></div>
        <div className="relative z-10">
          <HeroSection />
          <StatsSection />
          <FeaturesSection />
          <CoursesGrid />
          <TestimonialsSection />
          <PricingSection />
          <FAQSection />
          <CTASection />
          
        </div>
      </main>
    </Web3Provider>
  );
}
