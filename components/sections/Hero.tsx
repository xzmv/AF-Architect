'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { t, tx } from '@/data/translations'

const words = ['ALEXANDRA', 'FIGUEIRA']

export default function Hero() {
  const { lang } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()

  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 600], [0, shouldReduceMotion ? 0 : -80])
  const bgOpacity = useTransform(scrollY, [0, 400], [1, 0.6])

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  }

  const wordVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
  }

  const subVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] } },
  }

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
        {/* Placeholder hero image — replace with next/image when real asset provided */}
        <div
          className="w-full h-full bg-bg-dark"
          style={{
            backgroundImage: `url('https://placehold.co/1920x1080/2C2A28/4A4744?text=Hero+Placeholder')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          role="img"
          aria-label="Projecto de arquitectura — Alexandra Figueira"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/55" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Name */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="overflow-hidden"
        >
          {words.map((word) => (
            <motion.div key={word} variants={wordVariants} className="overflow-hidden">
              <h1 className="text-white font-serif font-light leading-none tracking-[0.18em] text-[clamp(2.4rem,7vw,6.5rem)]">
                {word}
              </h1>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="w-12 h-px bg-white/50 mx-auto my-5"
          style={{ transformOrigin: 'left' }}
        />

        {/* Tagline */}
        <motion.p
          variants={subVariants}
          initial="hidden"
          animate="visible"
          className="label-caps text-white/60 text-[0.65rem] tracking-[0.22em]"
        >
          {tx(t.hero.tagline, lang)}
        </motion.p>
      </div>

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
