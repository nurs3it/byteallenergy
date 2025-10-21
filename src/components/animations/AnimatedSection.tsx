"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

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

  const directionVariants = {
    up: { y: 50, opacity: 0 },
    down: { y: -50, opacity: 0 },
    left: { x: 50, opacity: 0 },
    right: { x: -50, opacity: 0 }
  }

  const animateVariants = {
    hidden: directionVariants[direction],
    visible: { 
      x: 0, 
      y: 0, 
      opacity: 1,
      transition: {
        duration,
        delay,
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
