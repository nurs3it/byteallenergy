/**
 * Feedback Thank You Page
 * Universal thank you page after survey submission
 */

'use client';

import { AnimatedSection } from '@/components/animations/AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft, House, EnvelopeSimple } from 'phosphor-react';
import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen pt-8 pb-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-energy-950 via-energy-900 to-oil-900 text-white relative overflow-hidden">
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
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 200,
                  damping: 20
                }}
                className="inline-flex items-center justify-center w-24 h-24 bg-green-500/20 rounded-full mb-6"
              >
                <CheckCircle className="w-16 h-16 text-green-400" weight="fill" />
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-white"
              >
                Thank You for Your Feedback!
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-xl text-energy-100/90"
              >
                Your feedback has been successfully submitted and is very important to us.
              </motion.p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <AnimatedSection delay={0.1}>
              <Card className="h-full card-hover">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-energy-500 to-energy-700 rounded-xl flex items-center justify-center mb-6">
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
              <Card className="h-full card-hover">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-6">
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
            <Card className="bg-gradient-to-br from-energy-50 to-energy-100 dark:from-energy-950 dark:to-energy-900 border-energy-200 dark:border-energy-800">
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
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-energy-600 to-energy-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
                      >
                        <House className="w-5 h-5" weight="bold" />
                        Go to Homepage
                      </motion.button>
                    </Link>
                    
                    <Link href="/contact">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-energy-700 dark:text-energy-300 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all border-2 border-energy-600"
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
                className="inline-flex items-center gap-2 text-energy-600 hover:text-energy-700 font-medium transition-colors"
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

