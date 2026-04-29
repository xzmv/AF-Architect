'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { t, tx } from '@/data/translations'

export default function Hero() {
  const { lang } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()

  const { scrollY } = useScroll()
  const bgOpacity = useTransform(scrollY, [0, 400], [1, 0.6])

  return (
    <section
      id="inicio"
      ref={containerRef}
      className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background video */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ opacity: bgOpacity }}
      >
        {shouldReduceMotion ? (
          <div
            className="w-full h-full bg-bg-dark"
            style={{
              backgroundImage: `url('/images/hero.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ) : (
          <video
            className="w-full h-full object-cover"
            src="/images/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          />
        )}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
      </motion.div>

      {/* Centred slogan */}
      <motion.div
        className="relative z-10 flex items-center justify-center px-8"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      >
        <Image
          src="/images/slogan-white.svg"
          alt="Alexandra Figueira, Residential & Hospitality Architecture"
          width={640}
          height={120}
          className="w-[min(96vw,980px)] h-auto"
          priority
        />
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
