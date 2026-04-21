"use client"

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { List as Menu, X, Sun, Moon } from 'phosphor-react'
import { Button } from '@/components/ui/button'
import { content, companyData } from '@/lib/data/company'
import { useTheme } from 'next-themes'
import { useAnalytics } from '@/hooks/useAnalytics'

const navigation = [
  { name: content.nav.home, href: '/' },
  { name: content.nav.services, href: '/services' },
  { name: content.nav.about, href: '/about' },
  { name: content.nav.team, href: '/team' },
  { name: content.nav.clients, href: '/clients' },
  { name: content.nav.workflow, href: '/workflow' },
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
  const headerRef = useRef<HTMLElement>(null)
  const { trackLink, trackTheme, trackMenu, trackButton } = useAnalytics()

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

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  // Close menu when pathname changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    trackTheme(newTheme)
  }

  const handleMenuToggle = () => {
    const newState = !isOpen
    setIsOpen(newState)
    trackMenu(newState ? 'open' : 'close')
  }

  const handleNavClick = (itemName: string) => {
    trackMenu('item_click', itemName)
    setIsOpen(false)
  }

  return (
    <motion.header
      ref={headerRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-background/95 backdrop-blur-sm border-b border-border'
        : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between ${isMobile ? 'h-14' : 'h-16'}`}>
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center min-h-[44px] min-w-[44px]"
            onClick={() => trackButton('Logo', 'header')}
          >
            <Image
              src={companyData.logo}
              alt="ByteAll Energy Logo"
              width={80}
              draggable={false}
              height={80}
              className="h-28 w-28 object-contain dark:brightness-0 dark:invert"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => trackLink(item.name, item.href)}
                className={`relative text-sm font-medium transition-colors hover:text-primary ${pathname === item.href
                  ? 'text-primary'
                  : 'text-foreground'
                  }`}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
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
                <motion.div
                  whileHover={{ rotate: 180, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Sun className="w-4 h-4" weight="fill" />
                </motion.div>
              ) : (
                <motion.div
                  whileHover={{ rotate: -15, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Moon className="w-4 h-4" weight="fill" />
                </motion.div>
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden min-h-[44px] min-w-[44px] p-2"
              onClick={handleMenuToggle}
            >
              {isOpen ? (
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5" weight="bold" />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ rotate: 90 }}
                  animate={{ rotate: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5" weight="bold" />
                </motion.div>
              )}
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
            className="lg:hidden bg-background/95 backdrop-blur-sm border-b border-border"
          >
            <div className="container mx-auto px-4 py-6">
              <nav className="flex flex-col space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => handleNavClick(item.name)}
                    className={`text-base font-medium transition-colors hover:text-primary min-h-[44px] flex items-center px-2 py-3 rounded-sm hover:bg-muted/50 ${pathname === item.href
                      ? 'text-primary bg-accent dark:bg-accent'
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
