/**
 * Team Member Card Component
 * Individual team member card with loading states
 */

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Mail, Linkedin, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedSection } from '@/components/animations/AnimatedSection';
import type { TeamMember } from '@/lib/data/team';

interface TeamMemberCardProps {
  member?: TeamMember;
  index: number;
  loading?: boolean;
}

export function TeamMemberCard({ member, index, loading = false }: TeamMemberCardProps) {
  const [imageError, setImageError] = useState(false);

  if (loading || !member) {
    return (
      <AnimatedSection delay={index * 0.1}>
        <Card className="h-full">
          <CardContent className="p-6 text-center space-y-4">
            <div className="relative flex items-center justify-center">
              <div className="w-32 h-32 bg-muted rounded-full mx-auto animate-pulse" />
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-muted rounded-full animate-pulse" />
            </div>
            
            <div className="space-y-2">
              <div className="h-6 bg-muted rounded animate-pulse" />
              <div className="h-4 bg-muted rounded animate-pulse w-3/4 mx-auto" />
              <div className="h-3 bg-muted rounded animate-pulse w-full" />
              <div className="h-3 bg-muted rounded animate-pulse w-2/3 mx-auto" />
            </div>

            <div className="space-y-2">
              <div className="h-4 bg-muted rounded animate-pulse w-1/3 mx-auto" />
              <div className="flex justify-center space-x-2">
                <div className="h-6 bg-muted rounded-full animate-pulse w-16" />
                <div className="h-6 bg-muted rounded-full animate-pulse w-20" />
              </div>
            </div>

            <div className="flex justify-center space-x-4 pt-4">
              <div className="w-5 h-5 bg-muted rounded animate-pulse" />
              <div className="w-5 h-5 bg-muted rounded animate-pulse" />
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
    );
  }

  const showInitials = !member.image || imageError;
  const initials = member.name.split(' ').map(part => part[0] ?? '').join('').slice(0, 2).toUpperCase();

  return (
    <AnimatedSection delay={index * 0.1}>
      <Card className="card-hover h-full">
        <CardContent className="p-6 text-center space-y-4">
          <div className="relative flex items-center justify-center">
            {showInitials ? (
              <div className="w-32 h-32 bg-linear-to-br from-energy-500 to-energy-700 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                {initials}
              </div>
            ) : (
              <Image
                src={member.image}
                alt={member.name}
                width={128}
                height={128}
                className="w-32 h-32 rounded-full object-cover"
                onError={() => setImageError(true)}
                unoptimized
              />
            )}

            {member.isLeadership && (
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-oil-500 rounded-full flex items-center justify-center">
                <Award className="w-4 h-4 text-white" />
              </div>
            )}
          </div>
          
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-energy-600 font-medium">{member.role}</p>
            <p className="text-sm text-muted-foreground">{member.bio}</p>
          </div>

          {member.expertise.length > 0 && (
            <div className="space-y-2">
              <h4 className="font-medium text-sm">Expertise</h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {member.expertise.slice(0, member.isLeadership ? 3 : 2).map((skill, skillIndex) => (
                  <span key={skillIndex} className="px-2 py-1 bg-energy-50 dark:bg-energy-950 text-energy-700 dark:text-energy-300 text-xs rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-center space-x-4 pt-4">
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="text-muted-foreground hover:text-energy-600 transition-colors"
                aria-label={`Email ${member.name}`}
              >
                <Mail className="w-5 h-5" />
              </a>
            )}
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-energy-600 transition-colors"
                aria-label={`LinkedIn profile of ${member.name}`}
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
}
