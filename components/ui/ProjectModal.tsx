'use client'

import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import ImageCarousel from '@/components/ui/ImageCarousel'
import { useLanguage } from '@/context/LanguageContext'
import { tx } from '@/data/translations'
import { t } from '@/data/translations'
import type { Project } from '@/lib/types'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { lang } = useLanguage()
  const closeRef = useRef<HTMLButtonElement>(null)

  // Focus close button on open
  useEffect(() => {
    if (project) {
      setTimeout(() => closeRef.current?.focus(), 50)
    }
  }, [project])

  // Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  // Prevent body scroll
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [project])

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            key="panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-name"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-4 top-[5vh] bottom-[5vh] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-4xl z-50 bg-bg overflow-y-auto"
          >
            {/* Close */}
            <button
              ref={closeRef}
              onClick={onClose}
              aria-label={tx(t.project.close, lang)}
              className="sticky top-4 float-right mr-4 z-10 p-2 bg-bg border border-border text-primary hover:bg-bg-alt transition-colors"
            >
              <X size={16} strokeWidth={1.5} />
            </button>

            <div className="p-6 md:p-10 pt-4 md:pt-6">
              {/* Image carousel */}
              <ImageCarousel
                images={project.images}
                alt={lang === 'pt' ? project.namePt : project.nameEn}
                priority
                aspectRatio="aspect-[16/9]"
              />

              {/* Header */}
              <div className="mt-8 mb-6 pb-6 border-b border-border">
                <p className="label-caps mb-2">
                  {lang === 'pt' ? project.typePt : project.typeEn}
                </p>
                <h2
                  id="modal-project-name"
                  className="text-3xl md:text-4xl font-serif font-light text-primary"
                >
                  {lang === 'pt' ? project.namePt : project.nameEn}
                </h2>
              </div>

              {/* Description */}
              <p className="text-primary/70 font-sans font-light text-sm md:text-base leading-relaxed mb-8">
                {lang === 'pt' ? project.descriptionPt : project.descriptionEn}
              </p>

              {/* Area data */}
              <div className="flex flex-wrap gap-6 pt-6 border-t border-border">
                {project.areas.map((area) => (
                  <div key={area.labelPt}>
                    <p className="label-caps mb-1">
                      {lang === 'pt' ? area.labelPt : area.labelEn}
                    </p>
                    <p className="font-sans font-medium text-lg text-primary tracking-wide">
                      {area.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
