'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'phosphor-react'

interface CustomMapPinProps {
  isActive?: boolean
  onClick?: () => void
}

export function CustomMapPin({ isActive = false, onClick }: CustomMapPinProps) {
  return (
    <motion.div
      className="relative cursor-pointer"
      onClick={onClick}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      animate={isActive ? { scale: 1.1 } : { scale: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Outer pulse ring */}
      {isActive && (
        <motion.div
          className="absolute inset-0 rounded-full bg-energy-600/30"
          animate={{
            scale: [1, 1.5, 1.5],
            opacity: [0.5, 0, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
      )}
      
      {/* Pin shadow */}
      <div className="absolute top-1 left-1 w-8 h-8 bg-black/20 rounded-full blur-sm" />
      
      {/* Main pin */}
      <div className="relative">
        <div className="w-10 h-10 bg-energy-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-energy-900">
          <MapPin 
            className="w-6 h-6 text-white" 
            weight="fill"
          />
        </div>
        
        {/* Pin point */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
          <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-10 border-l-transparent border-r-transparent border-t-energy-600" />
        </div>
      </div>
    </motion.div>
  )
}

