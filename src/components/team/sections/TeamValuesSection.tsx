/**
 * Team Values Section Component
 * Displays team values with loading states
 */

'use client';

import { Target, Shield, Users, Lightbulb, Icon as PhosphorIcon } from 'phosphor-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedSection } from '@/components/animations/AnimatedSection';

interface TeamValue {
  icon: PhosphorIcon;
  title: string;
  description: string;
}

interface TeamValuesSectionProps {
  values?: TeamValue[];
  loading?: boolean;
  title?: string;
  subtitle?: string;
}

export function TeamValuesSection({ 
  values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We continuously push the boundaries of what's possible in digital oilfield technology."
    },
    {
      icon: Shield,
      title: "Reliability", 
      description: "Our solutions are built to withstand the demanding conditions of oil & gas operations."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients to understand their unique challenges and goals."
    },
    {
      icon: Lightbulb,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering solutions that exceed expectations."
    }
  ],
  loading = false,
  title = "Our Team Values",
  subtitle = "The principles that guide our team and shape our culture"
}: TeamValuesSectionProps) {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">
              {title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {subtitle}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {loading ? (
            // Skeleton loading state
            Array.from({ length: 4 }).map((_, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="h-full text-center">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-16 h-16 bg-muted rounded-2xl mx-auto animate-pulse" />
                    <div className="h-6 bg-muted rounded animate-pulse" />
                    <div className="space-y-2">
                      <div className="h-3 bg-muted rounded animate-pulse" />
                      <div className="h-3 bg-muted rounded animate-pulse" />
                      <div className="h-3 bg-muted rounded animate-pulse w-2/3 mx-auto" />
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))
          ) : (
            values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="card-hover h-full text-center">
                  <CardContent className="p-6 space-y-4">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 bg-energy-100 dark:bg-energy-900 rounded-2xl flex items-center justify-center mx-auto"
                    >
                      <value.icon className="w-8 h-8 text-energy-600" weight="duotone" />
                    </motion.div>
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
