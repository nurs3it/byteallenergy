"use client"

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Mail, MapPin, Linkedin, Globe } from 'lucide-react'
import { companyData } from '@/lib/data/company'
import { content } from '@/lib/data/company'

export function Footer() {

  const footerLinks = {
    company: [
      { name: content.nav.about, href: '/about' },
      { name: content.nav.team, href: '/team' },
      { name: content.nav.clients, href: '/clients' },
      { name: content.nav.workflow, href: '/workflow' },
    ],
    services: [
      { name: content.nav.services, href: '/services' },
      { name: content.nav.contact, href: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
    ]
  }

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center">
              <Image
                src={companyData.logo}
                alt="ByteAll Energy Logo"
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {companyData.description.short}
            </p>
            <div className="flex space-x-4">
              <a
                href={companyData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-energy-600 transition-colors touch-target flex items-center justify-center"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${companyData.email}`}
                className="text-muted-foreground hover:text-energy-600 transition-colors touch-target flex items-center justify-center"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-foreground">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-energy-600 transition-colors text-sm touch-target flex items-center"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-foreground">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-energy-600 transition-colors text-sm touch-target flex items-center"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-foreground">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-energy-600 mt-0.5 shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>{companyData.headquarters.address}</p>
                  <p>{companyData.headquarters.city}, {companyData.headquarters.country}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-energy-600 shrink-0" />
                <a
                  href={`mailto:${companyData.email}`}
                  className="text-sm text-muted-foreground hover:text-energy-600 transition-colors touch-target flex items-center"
                >
                  {companyData.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-4 h-4 text-energy-600 shrink-0" />
                <a
                  href={companyData.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-energy-600 transition-colors touch-target flex items-center"
                >
                  {companyData.website}
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-border mt-8 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {companyData.legalName}. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-energy-600 transition-colors touch-target flex items-center"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
