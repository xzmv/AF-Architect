'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { tx, t } from '@/data/translations'
import { projectsRecentes } from '@/data/projects'
import ProjectCard from '@/components/ui/ProjectCard'
import type { Project } from '@/lib/types'

interface ProjectsRecentesProps {
  onProjectClick: (project: Project) => void
}

export default function ProjectsRecentes({ onProjectClick }: ProjectsRecentesProps) {
  const { lang } = useLanguage()
  const labelRef = useRef<HTMLDivElement>(null)
  const inView = useInView(labelRef, { once: true, margin: '-60px 0px' })
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="projectos" className="w-full">
      {/* Section label */}
      <div
        ref={labelRef}
        className="max-w-7xl mx-auto px-6 md:px-10 pt-24 pb-12"
      >
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-divider"
        >
          <span className="label-caps">{tx(t.sections.recentProjects, lang)}</span>
        </motion.div>
      </div>

      {/* Project cards */}
      <div className="border-b border-border">
        {projectsRecentes.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            onClick={onProjectClick}
          />
        ))}
      </div>
    </section>
  )
}
