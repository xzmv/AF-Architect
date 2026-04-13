'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import ImageCarousel from '@/components/ui/ImageCarousel'
import { useLanguage } from '@/context/LanguageContext'
import { tx, t } from '@/data/translations'
import type { Project } from '@/lib/types'

interface ProjectCardProps {
  project: Project
  index: number
  onClick: (project: Project) => void
}

export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  const { lang } = useLanguage()
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px 0px' })
  const shouldReduceMotion = useReducedMotion()

  const isEven = index % 2 === 0

  const variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 },
    },
  }

  return (
    <motion.article
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={`grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-border cursor-pointer group`}
      onClick={() => onClick(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick(project) }}
      aria-label={`${tx(t.project.viewProject, lang)}: ${lang === 'pt' ? project.namePt : project.nameEn}`}
    >
      {/* Image — alternates left/right */}
      <div className={`${isEven ? 'md:order-2' : 'md:order-1'} overflow-hidden`}>
        <div className="md:group-hover:scale-[1.01] transition-transform duration-700">
          <ImageCarousel
            images={project.images}
            alt={lang === 'pt' ? project.namePt : project.nameEn}
          />
        </div>
      </div>

      {/* Text */}
      <div
        className={`${isEven ? 'md:order-1' : 'md:order-2'} flex flex-col justify-center px-8 md:px-12 py-10 md:py-14 bg-bg`}
      >
        <p className="label-caps mb-3">
          {lang === 'pt' ? project.typePt : project.typeEn}
        </p>

        <h2 className="text-3xl md:text-4xl font-serif font-light mb-5 text-primary group-hover:tracking-wider transition-all duration-500">
          {lang === 'pt' ? project.namePt : project.nameEn}
        </h2>

        <p className="text-sm text-muted font-light leading-7 mb-8 line-clamp-4">
          {lang === 'pt' ? project.descriptionPt : project.descriptionEn}
        </p>

        {/* Areas */}
        <div className="flex flex-wrap gap-6 pt-6 border-t border-border">
          {project.areas.map((area) => (
            <div key={area.labelPt}>
              <p className="label-caps mb-1">
                {lang === 'pt' ? area.labelPt : area.labelEn}
              </p>
              <p className="font-sans font-medium text-base text-primary tracking-wide">{area.value}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8">
          <span className="label-caps text-primary group-hover:tracking-widest transition-all duration-300">
            {tx(t.project.viewProject, lang)} →
          </span>
        </div>
      </div>
    </motion.article>
  )
}
