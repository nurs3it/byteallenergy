/**
 * Hero Section Component
 * Main header section for team page
 */

'use client';

import { PageBanner } from '@/components/layout/PageBanner';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
}

export function HeroSection({
  title = "Meet Our Team",
  subtitle = "Expert professionals dedicated to transforming energy operations"
}: HeroSectionProps) {
  return (
    <PageBanner
      title={title}
      subtitle={subtitle}
    />
  );
}
