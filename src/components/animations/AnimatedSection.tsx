"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  duration?: number
}

export function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up',
  duration = 0.6
}: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check for reduced motion preference
    const checkReducedMotion = () => {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      setPrefersReducedMotion(prefersReduced)
    }
    
    // Check for mobile device
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      setIsMobile(isMobileDevice)
    }
    
    checkReducedMotion()
    checkMobile()
    
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Reduce animation intensity on mobile and for users who prefer reduced motion
  const shouldReduceMotion = prefersReducedMotion || isMobile
  
  const directionVariants = {
    up: { y: shouldReduceMotion ? 20 : 50, opacity: 0 },
    down: { y: shouldReduceMotion ? -20 : -50, opacity: 0 },
    left: { x: shouldReduceMotion ? 20 : 50, opacity: 0 },
    right: { x: shouldReduceMotion ? -20 : -50, opacity: 0 }
  }

  const animateVariants = {
    hidden: directionVariants[direction],
    visible: { 
      x: 0, 
      y: 0, 
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.2 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: "easeOut" as const
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animateVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
