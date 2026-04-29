'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { Phone, Mail, Linkedin } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { tx, t } from '@/data/translations'

export default function Contact() {
  const { lang } = useLanguage()
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px 0px' })
  const shouldReduceMotion = useReducedMotion()

  const vars = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 },
    }),
  }

  return (
    <footer id="contactos" ref={ref} className="w-full bg-bg-dark text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        {/* Label */}
        <motion.div
          custom={0}
          variants={vars}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex items-center gap-5"
        >
          <span className="text-[0.68rem] font-sans font-medium tracking-[0.18em] uppercase text-white/40">
            {tx(t.sections.contact, lang)}
          </span>
          <div className="flex-1 h-px bg-white/10" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start md:items-center">
          {/* Contacts */}
          <motion.div
            custom={1}
            variants={vars}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="w-full pt-8 flex flex-col justify-between items-start gap-8 md:pt-0 md:border-t-0 md:block"
          >
            <address className="not-italic flex flex-col items-start gap-4 w-full">
              <a
                href="tel:+351919650101"
                className="w-full flex items-center justify-start gap-3 text-white/70 hover:text-white transition-colors duration-200 group"
              >
                <Phone size={14} className="shrink-0 text-white/30 group-hover:text-white/60 transition-colors" strokeWidth={1.5} />
                <span className="font-sans font-light text-sm">+351 919 650 101</span>
              </a>

              <a
                href="mailto:af@alexandrafigueira.pt"
                className="w-full flex items-center justify-start gap-3 text-white/70 hover:text-white transition-colors duration-200 group"
              >
                <Mail size={14} className="shrink-0 text-white/30 group-hover:text-white/60 transition-colors" strokeWidth={1.5} />
                <span className="font-sans font-light text-sm">af@alexandrafigueira.pt</span>
              </a>

              <a
                href="https://www.linkedin.com/in/alexandrafigueira2022"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-start gap-3 text-white/70 hover:text-white transition-colors duration-200 group"
              >
                <Linkedin size={14} className="shrink-0 text-white/30 group-hover:text-white/60 transition-colors" strokeWidth={1.5} />
                <span className="font-sans font-light text-sm">LinkedIn</span>
              </a>
            </address>
          </motion.div>

          <motion.div
            custom={2}
            variants={vars}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex justify-center md:justify-end md:items-center"
          >
            <Image
              src="/images/monogram-white.svg"
              alt="Alexandra Figueira, assinatura"
              width={48}
              height={48}
              className="w-48 h-48"
            />
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          custom={3}
          variants={vars}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
        >
          <div className="flex flex-col gap-3">
            <p className="text-[0.65rem] text-white/25 font-sans tracking-wider uppercase">
              {tx(t.contact.copyright, lang)}
            </p>
            <p className="text-[0.65rem] text-white/20 font-sans">
              Universidade Lusíada de Lisboa, 1997
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
