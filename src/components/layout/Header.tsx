"use client"

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { List as Menu, X, Sun, Moon, CaretDown } from 'phosphor-react'
import { Button } from '@/components/ui/button'
import { content, companyData } from '@/lib/data/company'
import { services } from '@/lib/data/services'
import { useTheme } from 'next-themes'
import { useAnalytics } from '@/hooks/useAnalytics'

interface NavItem {
  name: string
  href: string
  children?: { name: string; href: string }[]
}

const navigation: NavItem[] = [
  { name: content.nav.home, href: '/' },
  {
    name: content.nav.services,
    href: '/services',
    children: services.map((s) => ({ name: s.title, href: `/services/${s.slug}` })),
  },
  {
    name: content.nav.about,
    href: '/about',
    children: [
      { name: 'About', href: '/about' },
      { name: content.nav.team, href: '/team' },
      { name: content.nav.clients, href: '/clients' },
    ],
  },
  { name: content.nav.caseStudies, href: '/case-studies' },
  {
    name: content.nav.insights,
    href: '/news',
    children: [
      { name: content.nav.news, href: '/news' },
    ],
  },
  { name: content.nav.careers, href: '/careers' },
  { name: content.nav.contact, href: '/contact' },
]

function isActive(pathname: string, item: NavItem): boolean {
  if (item.href === '/') return pathname === '/'
  return pathname === item.href || pathname.startsWith(item.href + '/')
    || (item.children?.some((c) => pathname === c.href || pathname.startsWith(c.href + '/')) ?? false)
}

function DesktopDropdown({ item, pathname, trackLink }: { item: NavItem; pathname: string; trackLink: (name: string, href: string) => void }) {
  const [open, setOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const active = isActive(pathname, item)

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpen(true)
  }

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150)
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Link
        href={item.href}
        onClick={() => trackLink(item.name, item.href)}
        className={`relative flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
          active ? 'text-primary' : 'text-foreground'
        }`}
      >
        {item.name}
        <CaretDown
          className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`}
          weight="bold"
        />
        {active && (
          <motion.div
            layoutId="activeTab"
            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
          />
        )}
      </Link>

      <AnimatePresence>
        {open && item.children && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 pt-2 z-50"
          >
            <div className="min-w-[220px] bg-background border border-border rounded-sm shadow-md py-1">
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={() => {
                    trackLink(child.name, child.href)
                    setOpen(false)
                  }}
                  className={`block px-4 py-2 text-sm transition-colors hover:bg-accent hover:text-primary ${
                    pathname === child.href ? 'text-primary bg-accent' : 'text-foreground'
                  }`}
                >
                  {child.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const headerRef = useRef<HTMLElement>(null)
  const { trackLink, trackTheme, trackMenu, trackButton } = useAnalytics()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    }

    checkMobile()
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', checkMobile)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

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

  useEffect(() => {
    setIsOpen(false)
    setExpandedMobile(null)
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

  const toggleMobileSubmenu = useCallback((name: string) => {
    setExpandedMobile((prev) => (prev === name ? null : name))
  }, [])

  return (
    <motion.header
      ref={headerRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
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
            {navigation.map((item) =>
              item.children ? (
                <DesktopDropdown
                  key={item.name}
                  item={item}
                  pathname={pathname}
                  trackLink={trackLink}
                />
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => trackLink(item.name, item.href)}
                  className={`relative text-sm font-medium transition-colors hover:text-primary ${
                    isActive(pathname, item) ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {item.name}
                  {isActive(pathname, item) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    />
                  )}
                </Link>
              )
            )}
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-2">
            {/* Theme toggle hidden — kept in code for future use */}

            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden min-h-[44px] min-w-[44px] p-2"
              onClick={handleMenuToggle}
            >
              {isOpen ? (
                <motion.div initial={{ rotate: 0 }} animate={{ rotate: 90 }} transition={{ duration: 0.2 }}>
                  <X className="w-5 h-5" weight="bold" />
                </motion.div>
              ) : (
                <motion.div initial={{ rotate: 90 }} animate={{ rotate: 0 }} transition={{ duration: 0.2 }}>
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
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-background/95 backdrop-blur-sm border-b border-border"
          >
            <div className="container mx-auto px-4 py-6">
              <nav className="flex flex-col space-y-1">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      <>
                        <button
                          onClick={() => toggleMobileSubmenu(item.name)}
                          className={`w-full flex items-center justify-between text-base font-medium transition-colors hover:text-primary min-h-[44px] px-2 py-3 rounded-sm hover:bg-muted/50 ${
                            isActive(pathname, item) ? 'text-primary' : 'text-foreground'
                          }`}
                        >
                          {item.name}
                          <CaretDown
                            className={`w-4 h-4 transition-transform ${
                              expandedMobile === item.name ? 'rotate-180' : ''
                            }`}
                            weight="bold"
                          />
                        </button>
                        <AnimatePresence>
                          {expandedMobile === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 border-l-2 border-border ml-2 mb-2">
                                {item.children.map((child) => (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    onClick={() => handleNavClick(child.name)}
                                    className={`block text-sm min-h-[44px] flex items-center px-2 py-2 rounded-sm hover:bg-muted/50 transition-colors ${
                                      pathname === child.href
                                        ? 'text-primary bg-accent'
                                        : 'text-muted-foreground hover:text-foreground'
                                    }`}
                                  >
                                    {child.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => handleNavClick(item.name)}
                        className={`text-base font-medium transition-colors hover:text-primary min-h-[44px] flex items-center px-2 py-3 rounded-sm hover:bg-muted/50 ${
                          isActive(pathname, item)
                            ? 'text-primary bg-accent dark:bg-accent'
                            : 'text-foreground'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
