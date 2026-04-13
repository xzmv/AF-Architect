'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { tx, t } from '@/data/translations'
import { projectsAreacor } from '@/data/projects'
import ImageCarousel from '@/components/ui/ImageCarousel'
import type { Project } from '@/lib/types'

interface ColaboracaoAreacorProps {
  onProjectClick: (project: Project) => void
}

function AreacorCard({
  project,
  index,
  onClick,
}: {
  project: Project
  index: number
  onClick: (p: Project) => void
}) {
  const { lang } = useLanguage()
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px 0px' })
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: (index % 3) * 0.1 }}
      className="flex flex-col cursor-pointer group border-t border-border"
      onClick={() => onClick(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick(project) }}
      aria-label={`${tx(t.project.viewProject, lang)}: ${lang === 'pt' ? project.namePt : project.nameEn}`}
    >
      {/* Image */}
      <div className="overflow-hidden">
        <div className="group-hover:scale-[1.02] transition-transform duration-700">
          <ImageCarousel
            images={project.images}
            alt={lang === 'pt' ? project.namePt : project.nameEn}
            aspectRatio="aspect-[4/3]"
          />
        </div>
      </div>

      {/* Text */}
      <div className="pt-6 pb-8 px-1 flex-1 flex flex-col">
        <p className="label-caps mb-2">
          {lang === 'pt' ? project.typePt : project.typeEn}
        </p>
        <h2 className="font-serif text-xl md:text-2xl font-light text-primary mb-4 group-hover:tracking-wider transition-all duration-500">
          {lang === 'pt' ? project.namePt : project.nameEn}
        </h2>
        <p className="text-xs text-muted font-light leading-6 line-clamp-3 mb-4 flex-1">
          {lang === 'pt' ? project.descriptionPt : project.descriptionEn}
        </p>

        {/* Areas */}
        <div className="flex flex-wrap gap-4 pt-4 border-t border-border mt-auto">
          {project.areas.map((area) => (
            <div key={area.labelPt}>
              <p className="label-caps mb-0.5">
                {lang === 'pt' ? area.labelPt : area.labelEn}
              </p>
              <p className="font-sans font-medium text-sm text-primary tracking-wide">{area.value}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export default function ColaboracaoAreacor({ onProjectClick }: ColaboracaoAreacorProps) {
  const { lang } = useLanguage()
  const labelRef = useRef<HTMLDivElement>(null)
  const inView = useInView(labelRef, { once: true, margin: '-60px 0px' })
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="areacor" className="w-full bg-bg-alt">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-24 pb-20">
        {/* Label */}
        <motion.div
          ref={labelRef}
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-divider mb-12"
        >
          <span className="label-caps">{tx(t.sections.areacorTitle, lang)}</span>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-0">
          {projectsAreacor.map((project, i) => (
            <AreacorCard
              key={project.id}
              project={project}
              index={i}
              onClick={onProjectClick}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
