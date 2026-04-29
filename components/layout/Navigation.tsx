'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import LanguageToggle from '@/components/ui/LanguageToggle'
import { useLanguage } from '@/context/LanguageContext'
import { t, tx } from '@/data/translations'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const { lang } = useLanguage()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 80)
  })

  const navLinks = [
    { href: '#inicio', label: tx(t.nav.home, lang) },
    { href: '#projectos', label: tx(t.nav.projects, lang) },
    { href: '#areacor', label: tx(t.nav.areacor, lang) },
    { href: '#sobre', label: tx(t.nav.about, lang) },
    { href: '#contactos', label: tx(t.nav.contact, lang) },
  ]

  const handleLinkClick = () => setMenuOpen(false)

  // Over the dark hero = white text; scrolled over light content = dark text
  const linkClass = scrolled
    ? 'label-caps text-primary/60 hover:text-primary transition-colors duration-200'
    : 'label-caps text-white/70 hover:text-white transition-colors duration-200'

  const hamburgerClass = scrolled ? 'text-primary' : 'text-white'

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        animate={{
          backgroundColor: scrolled ? 'rgba(246,243,238,0.95)' : 'transparent',
          borderBottomWidth: scrolled ? 1 : 0,
          borderBottomColor: '#D8D4CC',
        }}
        style={{ backdropFilter: scrolled ? 'blur(8px)' : 'none' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
          {/* Logo without slogan */}
          <Link href="#inicio" aria-label="Alexandra Figueira, Início">
            <Image
              src={scrolled ? '/images/logo-black.svg' : '/images/logo-white.svg'}
              alt="Alexandra Figueira"
              width={220}
              height={48}
              className="w-[180px] md:w-[220px] h-auto transition-opacity duration-300"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Main navigation"
            className="hidden md:flex items-center gap-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={linkClass}
              >
                {link.label}
              </Link>
            ))}
            <LanguageToggle scrolled={scrolled} />
          </nav>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 transition-colors duration-300 ${hamburgerClass}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-bg flex flex-col pt-20 px-8"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col gap-8 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-3xl font-serif font-light text-primary tracking-wide border-b border-border pb-6"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4">
                <LanguageToggle scrolled={true} />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

