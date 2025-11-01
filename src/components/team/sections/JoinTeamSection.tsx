/**
 * Join Team Section Component
 * Call-to-action section for joining the team
 */

'use client';

import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/animations/AnimatedSection';

interface JoinTeamSectionProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  loading?: boolean;
}

export function JoinTeamSection({ 
  title = "Join Our Team",
  subtitle = "We're always looking for talented individuals who share our passion for innovation and excellence in energy technology.",
  primaryButtonText = "View Open Positions",
  secondaryButtonText = "Send Your Resume",
  onPrimaryClick,
  onSecondaryClick,
  loading = false
}: JoinTeamSectionProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">
              {title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="energy-gradient text-white hover:opacity-90"
                onClick={onPrimaryClick}
                disabled={loading}
              >
                {loading ? "Loading..." : primaryButtonText}
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={onSecondaryClick}
                disabled={loading}
              >
                {loading ? "Loading..." : secondaryButtonText}
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
