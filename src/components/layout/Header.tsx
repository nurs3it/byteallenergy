"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Globe, Sun, Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { content } from '@/lib/data/company'
import { useTheme } from 'next-themes'

const navigation = [
  { name: content.nav.home, href: '/' },
  { name: content.nav.services, href: '/services' },
  { name: content.nav.about, href: '/about' },
  { name: content.nav.team, href: '/team' },
  { name: content.nav.clients, href: '/clients' },
  { name: content.nav.workflow, href: '/workflow' },
  { name: content.nav.training, href: '/training' },
  { name: content.nav.news, href: '/news' },
  { name: content.nav.contact, href: '/contact' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    // Detect mobile device
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
    
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', checkMobile)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
        ? 'bg-background/80 backdrop-blur-md border-b border-border' 
        : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between ${isMobile ? 'h-14' : 'h-16'}`}>
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 min-h-[44px] min-w-[44px]">
            <div className="w-8 h-8 bg-gradient-to-br from-energy-500 to-energy-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">BE</span>
            </div>
            <span className={`font-bold bg-gradient-to-r from-energy-600 to-energy-800 bg-clip-text text-transparent ${isMobile ? 'text-lg' : 'text-xl'}`}>
              ByteAll Energy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition-colors hover:text-energy-600 ${
                  pathname === item.href 
                  ? 'text-energy-600' 
                  : 'text-foreground'
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-energy-600"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-2">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="flex items-center space-x-1 min-h-[44px] min-w-[44px] p-2"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden min-h-[44px] min-w-[44px] p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={prefersReducedMotion ? { duration: 0.1 } : { duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-background/95 backdrop-blur-md border-b border-border"
          >
            <div className="container mx-auto px-4 py-6">
              <nav className="flex flex-col space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-medium transition-colors hover:text-energy-600 min-h-[44px] flex items-center px-2 py-3 rounded-lg hover:bg-muted/50 ${
                      pathname === item.href 
                  ? 'text-energy-600 bg-energy-50 dark:bg-energy-950' 
                  : 'text-foreground'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
