/**
 * Team Stats Section Component
 * Displays team statistics with loading states
 */

'use client';

import { AnimatedSection } from '@/components/animations/AnimatedSection';

interface TeamStat {
  label: string;
  value: number;
  suffix: string;
}

interface TeamStatsSectionProps {
  stats?: TeamStat[];
  loading?: boolean;
  title?: string;
  subtitle?: string;
}

export function TeamStatsSection({ 
  stats = [
    { label: "Team Members", value: 25, suffix: "+" },
    { label: "Years Experience", value: 15, suffix: "+" },
    { label: "Countries", value: 5, suffix: "" },
    { label: "Languages", value: 8, suffix: "" },
  ],
  loading = false,
  title = "Our Team at a Glance",
  subtitle = "Diverse expertise united by a common vision"
}: TeamStatsSectionProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">
              {title}
            </h2>
            <p className="text-xl text-muted-foreground">
              {subtitle}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {loading ? (
            // Skeleton loading state
            Array.from({ length: 4 }).map((_, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="text-center space-y-2">
                  <div className="h-16 bg-muted rounded animate-pulse" />
                  <div className="h-4 bg-muted rounded animate-pulse w-3/4 mx-auto" />
                </div>
              </AnimatedSection>
            ))
          ) : (
            stats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="text-center space-y-2">
                  <div className="text-4xl md:text-5xl font-bold gradient-text">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </AnimatedSection>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
