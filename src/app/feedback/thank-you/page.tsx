/**
 * Feedback Thank You Page
 * Universal thank you page after survey submission
 */

'use client';

import { AnimatedSection } from '@/components/animations/AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';
import { PageBanner } from '@/components/layout/PageBanner';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft, House, EnvelopeSimple } from 'phosphor-react';
import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen pt-8 pb-20">
      <PageBanner
        title="Thank You for Your Feedback!"
        subtitle="Your insights help us improve our training programs and deliver better results."
        icon={<CheckCircle className="w-8 h-8 text-white/80" weight="fill" />}
      />

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <AnimatedSection delay={0.1}>
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-primary rounded-sm flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-white" weight="bold" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Your Response Has Been Recorded</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We&apos;ve successfully received your feedback. Your insights help us continuously improve our training programs and deliver better experiences.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-sm flex items-center justify-center mb-6">
                    <EnvelopeSimple className="w-8 h-8 text-white" weight="bold" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">What Happens Next?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our team will carefully review all feedback received. We use your input to enhance our training content, delivery methods, and overall experience.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          {/* Action Buttons */}
          <AnimatedSection delay={0.3}>
            <Card className="bg-accent dark:bg-accent border-border">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <h3 className="text-2xl font-bold">Where Would You Like to Go?</h3>
                  <p className="text-muted-foreground">
                    Feel free to explore more about our services or get in touch with us.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                    <Link href="/">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-sm shadow-md hover:shadow-lg transition-all"
                      >
                        <House className="w-5 h-5" weight="bold" />
                        Go to Homepage
                      </motion.button>
                    </Link>
                    
                    <Link href="/contact">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded-sm shadow-md hover:shadow-lg transition-all border-2 border-primary"
                      >
                        <EnvelopeSimple className="w-5 h-5" weight="bold" />
                        Contact Us
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Additional Message */}
          <AnimatedSection delay={0.4}>
            <div className="text-center mt-12 space-y-4">
              <p className="text-muted-foreground">
                Need to submit another response or have questions?
              </p>
              <Link 
                href="/feedback/training" 
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Feedback Form
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

