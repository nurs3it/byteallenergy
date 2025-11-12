/**
 * Team Page Component
 * Main team page with all sections and loading states
 */

'use client';

import { HeroSection } from './sections/HeroSection';
import { TeamStatsSection } from './sections/TeamStatsSection';
import { TeamValuesSection } from './sections/TeamValuesSection';
import { JoinTeamSection } from './sections/JoinTeamSection';
import { LeadershipSection } from './sections/LeadershipSection';
import { TeamMembersSection } from './sections/TeamMembersSection';
import { teamMembers } from '@/lib/data/team';

const teamStats = [
  { label: 'Team Members', value: 10, suffix: '+' },
  { label: 'Years of Experience', value: 7, suffix: '' },
  { label: 'Countries', value: 4, suffix: '' },
  { label: 'Delivered Projects', value: 5, suffix: '' }
];

const leadershipTeam = teamMembers.filter(member => member.isLeadership);
const coreTeam = teamMembers.filter(member => !member.isLeadership);

export default function TeamPage() {
  const handleViewPositions = () => {
    // Placeholder: replace with actual navigation or modal trigger when ready
    window.open('mailto:career@byteallenergy.com', '_blank');
  };

  const handleSendResume = () => {
    window.open('mailto:career@byteallenergy.com', '_blank');
  };

  return (
    <div className="min-h-screen pt-8">
      <HeroSection />

      <TeamStatsSection stats={teamStats} />

      <LeadershipSection members={leadershipTeam} />

      <TeamMembersSection members={coreTeam} />

      <TeamValuesSection />

      <JoinTeamSection
        onPrimaryClick={handleViewPositions}
        onSecondaryClick={handleSendResume}
      />
    </div>
  );
}
