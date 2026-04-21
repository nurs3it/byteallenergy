"use client"

import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/animations/AnimatedSection'

interface PageBannerProps {
  title: string
  subtitle?: string
  icon?: React.ReactNode
  badge?: string
  children?: React.ReactNode
}

export function PageBanner({ title, subtitle, icon, badge, children }: PageBannerProps) {
  return (
    <section className="relative py-20 overflow-hidden bg-secondary dark:bg-[hsl(0,0%,10%)]">
      {/* Geometric grid pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.06] dark:opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(var(--border) 1px, transparent 1px),
              linear-gradient(90deg, var(--border) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Subtle radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 dark:bg-primary/8 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            {badge && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-primary/10 dark:bg-white/10 border border-primary/20 dark:border-white/10 rounded-full px-4 py-1.5 text-sm text-primary dark:text-white/70"
              >
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                {badge}
              </motion.div>
            )}

            {icon && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 dark:bg-white/10 border border-primary/20 dark:border-white/10 rounded-sm mb-2"
              >
                <div className="text-primary dark:text-white/80 [&>svg]:w-8 [&>svg]:h-8">
                  {icon}
                </div>
              </motion.div>
            )}

            <h1 className="text-4xl md:text-6xl font-bold text-foreground dark:text-white tracking-tight">
              {title}
            </h1>

            {subtitle && (
              <p className="text-xl md:text-2xl text-muted-foreground dark:text-white/70 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}

            {children}
          </div>
        </AnimatedSection>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-40" />
    </section>
  )
}
