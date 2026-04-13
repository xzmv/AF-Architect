'use client'

import { useState, useCallback } from 'react'
import Navigation from '@/components/layout/Navigation'
import Hero from '@/components/sections/Hero'
import ProjectsRecentes from '@/components/sections/ProjectsRecentes'
import ColaboracaoAreacor from '@/components/sections/ColaboracaoAreacor'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import ProjectModal from '@/components/ui/ProjectModal'
import type { Project } from '@/lib/types'

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const handleProjectClick = useCallback((project: Project) => {
    setSelectedProject(project)
  }, [])

  const handleModalClose = useCallback(() => {
    setSelectedProject(null)
  }, [])

  return (
    <>
      <Navigation />
      <main id="main-content">
        <Hero />
        <ProjectsRecentes onProjectClick={handleProjectClick} />
        <ColaboracaoAreacor onProjectClick={handleProjectClick} />
        <About />
        <Contact />
      </main>
      <ProjectModal project={selectedProject} onClose={handleModalClose} />
    </>
  )
}
