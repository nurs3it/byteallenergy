/**
 * Training Feedback Page
 */

'use client';

import { SurveyForm } from '@/components/survey/SurveyForm';
import { trainingFeedbackConfig } from '@/lib/services/survey/configs/trainingFeedback';
import { PageBanner } from '@/components/layout/PageBanner';
import { ChatText } from 'phosphor-react';

export default function TrainingFeedbackPage() {
  return (
    <div className="min-h-screen pt-8 pb-20">
      <PageBanner
        title={trainingFeedbackConfig.title}
        subtitle={trainingFeedbackConfig.description}
        icon={<ChatText className="w-8 h-8 text-white/80" />}
      />

      {/* Form Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <SurveyForm config={trainingFeedbackConfig} />
        </div>
      </section>
    </div>
  );
}

