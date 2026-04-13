'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { tx, t } from '@/data/translations'

export default function About() {
  const { lang } = useLanguage()
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px 0px' })
  const shouldReduceMotion = useReducedMotion()

  const fadeLeft = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
  }

  const fadeRight = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 } },
  }

  return (
    <section id="sobre" ref={ref} className="w-full bg-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="section-divider mb-16"
        >
          <span className="label-caps">{tx(t.sections.about, lang)}</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 items-start">
          {/* Photo */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="md:col-span-2"
          >
            <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden border border-border">
              <Image
                src="/images/alexandra-figueira.png"
                alt="Alexandra Figueira, Arquitecta"
                title="Alexandra Figueira — Arquitecta, Cascais, Portugal"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 90vw, 40vw"
              />
            </div>
            <div className="mt-4 pt-4 border-t border-border">
              <p className="font-serif text-xl font-light text-primary">Alexandra Figueira</p>
              <p className="label-caps mt-1">{tx(t.about.role, lang)}</p>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="md:col-span-3 flex flex-col justify-center gap-6"
          >
            {/* Opening statement — larger */}
            <p className="font-serif text-2xl md:text-3xl font-light text-primary leading-snug">
              {tx(t.about.bio1, lang)}
            </p>

            <div className="w-6 h-px bg-border" />

            <p className="text-sm text-muted font-light leading-7">
              {tx(t.about.bio2, lang)}
            </p>
            <p className="text-sm text-muted font-light leading-7">
              {tx(t.about.bio3, lang)}
            </p>
            <p className="text-sm text-muted font-light leading-7">
              {tx(t.about.bio4, lang)}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
