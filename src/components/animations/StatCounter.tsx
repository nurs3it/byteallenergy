"use client"

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

interface StatCounterProps {
  needFormat?: boolean
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}

export function StatCounter({ 
  needFormat = true,
  end, 
  duration = 2, 
  suffix = '', 
  prefix = '',
  className = ''
}: StatCounterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isInView, end, duration])

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {prefix}{needFormat ? count.toLocaleString() : count}{suffix}
    </motion.span>
  )
}
