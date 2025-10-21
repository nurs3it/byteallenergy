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
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-energy-500 to-energy-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">BE</span>
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-energy-600 to-energy-800 bg-clip-text text-transparent">
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
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="flex items-center space-x-1"
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
              className="lg:hidden"
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
            className="lg:hidden bg-background/95 backdrop-blur-md border-b border-border"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-medium transition-colors hover:text-energy-600 ${
                      pathname === item.href 
                  ? 'text-energy-600' 
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
