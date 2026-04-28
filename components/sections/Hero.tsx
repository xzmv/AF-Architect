'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { t, tx } from '@/data/translations'

export default function Hero() {
  const { lang } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()

  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 600], [0, shouldReduceMotion ? 0 : -80])
  const bgOpacity = useTransform(scrollY, [0, 400], [1, 0.6])

  return (
    <section
      id="inicio"
      ref={containerRef}
      className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY, opacity: bgOpacity }}
      >
        <div
          className="w-full h-full bg-bg-dark"
          style={{
            backgroundImage: `url('/images/hero.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          role="img"
          aria-label="Projecto de arquitectura por Alexandra Figueira"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/55" />
      </motion.div>

      {/* Scroll cue */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer bg-transparent border-0 p-2"
        aria-label="Scroll para baixo"
        onClick={() =>
          document.getElementById('projectos')?.scrollIntoView({ behavior: 'smooth' })
        }
      >
        <span className="label-caps text-white/40 text-[0.6rem]">{tx(t.hero.scroll, lang)}</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} className="text-white/40" strokeWidth={1} />
        </motion.div>
      </motion.button>
    </section>
  )
}
