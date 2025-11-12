'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { ComponentType, SVGProps } from 'react'

interface AnimatedIconProps extends SVGProps<SVGSVGElement> {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  animateOnHover?: boolean
  animateOnMount?: boolean
  className?: string
}

export function AnimatedIcon({
  icon: Icon,
  animateOnHover = true,
  animateOnMount = false,
  className = '',
  ...props
}: AnimatedIconProps) {
  const iconElement = <Icon className={className} {...props} />

  if (!animateOnHover && !animateOnMount) {
    return iconElement
  }

  const motionProps: HTMLMotionProps<'div'> = {
    className,
  }

  if (animateOnMount) {
    motionProps.initial = { opacity: 0, scale: 0.8 }
    motionProps.animate = { opacity: 1, scale: 1 }
    motionProps.transition = { duration: 0.3, ease: 'easeOut' }
  }

  if (animateOnHover) {
    motionProps.whileHover = {
      scale: 1.1,
      rotate: [0, -3, 3, -3, 0],
      transition: { duration: 0.4, ease: 'easeInOut' },
    }
  }

  return (
    <motion.div {...motionProps}>
      {iconElement}
    </motion.div>
  )
}

