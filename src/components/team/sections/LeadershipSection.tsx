/**
 * Leadership Section Component
 * Displays leadership team with loading states
 */

'use client';

import { AnimatedSection } from '@/components/animations/AnimatedSection';
import { TeamMemberCard } from '../cards/TeamMemberCard';
import type { TeamMember } from '@/lib/data/team';

interface LeadershipSectionProps {
  members?: TeamMember[];
  loading?: boolean;
  title?: string;
  subtitle?: string;
}

export function LeadershipSection({ 
  members = [],
  loading = false,
  title = "Leadership Team",
  subtitle = "Visionary leaders driving innovation in energy technology"
}: LeadershipSectionProps) {
  return (
    <section className="py-20 bg-muted/30">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            Array.from({ length: 3 }).map((_, index) => (
              <TeamMemberCard key={index} index={index} loading />
            ))
          ) : members.length > 0 ? (
            members.map((member, index) => (
              <TeamMemberCard
                key={member.id}
                member={member}
                index={index}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">No leadership team members found.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
