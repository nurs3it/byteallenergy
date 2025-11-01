"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

interface ParallaxImageProps {
  children: React.ReactNode
  className?: string
  speed?: number
  direction?: 'up' | 'down'
}

export function ParallaxImage({ 
  children, 
  className = '', 
  speed = 0.5,
  direction = 'up'
}: ParallaxImageProps) {
  const ref = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  
  useEffect(() => {
    // Check for mobile device
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      setIsMobile(isMobileDevice)
    }
    
    // Check for reduced motion preference
    const checkReducedMotion = () => {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      setPrefersReducedMotion(prefersReduced)
    }
    
    checkMobile()
    checkReducedMotion()
    
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'up' ? [0, -100 * speed] : [0, 100 * speed]
  )

  const disableParallax = isMobile || prefersReducedMotion

  if (disableParallax) {
    return (
      <div className={className}>
        {children}
      </div>
    )
  }

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}
