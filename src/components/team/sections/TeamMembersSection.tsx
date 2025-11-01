/**
 * Team Members Section Component
 * Displays regular team members with loading states
 */

'use client';

import { AnimatedSection } from '@/components/animations/AnimatedSection';
import { TeamMemberCard } from '../cards/TeamMemberCard';
import type { TeamMember } from '@/lib/data/team';

interface TeamMembersSectionProps {
  members?: TeamMember[];
  loading?: boolean;
  title?: string;
  subtitle?: string;
}

export function TeamMembersSection({ 
  members = [],
  loading = false,
  title = "Our Expert Team",
  subtitle = "Talented professionals bringing diverse skills and perspectives"
}: TeamMembersSectionProps) {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            Array.from({ length: 6 }).map((_, index) => (
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
              <p className="text-muted-foreground">No team members found.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
