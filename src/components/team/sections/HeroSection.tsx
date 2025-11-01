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
    <section className="py-20 bg-linear-to-br from-energy-50 to-energy-100 dark:from-energy-950 dark:to-energy-900">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              {subtitle}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
