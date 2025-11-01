/**
 * Hero Section Component
 * Main header section for team page
 */

'use client';

import { AnimatedSection } from '@/components/animations/AnimatedSection';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
}

export function HeroSection({ 
  title = "Meet Our Team",
  subtitle = "Expert professionals dedicated to transforming energy operations"
}: HeroSectionProps) {
  return (
    <section className="py-20 bg-linear-to-br from-energy-950 via-energy-900 to-oil-900 text-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-energy-100/90">
              {subtitle}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
