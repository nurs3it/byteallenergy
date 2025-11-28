/**
 * Training Feedback Page
 */

'use client';

import { AnimatedSection } from '@/components/animations/AnimatedSection';
import { SurveyForm } from '@/components/survey/SurveyForm';
import { trainingFeedbackConfig } from '@/lib/services/survey/configs/trainingFeedback';
import { motion } from 'framer-motion';
import { ChatText } from 'phosphor-react';

export default function TrainingFeedbackPage() {
  return (
    <div className="min-h-screen pt-8 pb-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-energy-950 via-energy-900 to-oil-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-energy-600/20 rounded-full mb-6"
              >
                <ChatText className="w-10 h-10 text-energy-400" />
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                {trainingFeedbackConfig.title}
              </h1>
              <p className="text-xl text-energy-100/90">
                {trainingFeedbackConfig.description}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <SurveyForm config={trainingFeedbackConfig} />
        </div>
      </section>
    </div>
  );
}

