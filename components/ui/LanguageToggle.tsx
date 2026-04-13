'use client'

import { useLanguage } from '@/context/LanguageContext'
import { motion, AnimatePresence } from 'framer-motion'

interface LanguageToggleProps {
  scrolled?: boolean
}

export default function LanguageToggle({ scrolled = true }: LanguageToggleProps) {
  const { lang, toggle } = useLanguage()

  const activeColor = scrolled ? 'text-primary' : 'text-white/90'
  const mutedColor = scrolled ? 'text-primary/30' : 'text-white/35'
  const dividerColor = scrolled ? 'text-border' : 'text-white/20'

  return (
    <button
      onClick={toggle}
      aria-label={lang === 'pt' ? 'Switch to English' : 'Mudar para Português'}
      className="flex items-center gap-0 text-[11px] font-medium tracking-widest uppercase transition-colors duration-200"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={lang}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2 }}
          className={`inline-block w-6 text-center ${activeColor}`}
        >
          {lang.toUpperCase()}
        </motion.span>
      </AnimatePresence>
      <span className={`mx-1 ${dividerColor}`}>|</span>
      <span className={mutedColor}>{lang === 'pt' ? 'EN' : 'PT'}</span>
    </button>
  )
}
