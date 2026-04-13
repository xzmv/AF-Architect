import type { Language } from '@/lib/types'

export const t = {
  nav: {
    home: { pt: 'Início', en: 'Home' },
    projects: { pt: 'Projectos', en: 'Projects' },
    areacor: { pt: 'Colaboração Areacor', en: 'Areacor Collaboration' },
    about: { pt: 'Sobre', en: 'About' },
    contact: { pt: 'Contactos', en: 'Contact' },
  },
  hero: {
    tagline: {
      pt: 'Arquitectura com identidade. Projecto com propósito.',
      en: 'Architecture with identity. Design with purpose.',
    },
    scroll: { pt: 'Descer', en: 'Scroll' },
  },
  sections: {
    recentProjects: { pt: 'Projectos Recentes', en: 'Recent Projects' },
    areacorTitle: {
      pt: 'Projectos em colaboração com o Atelier Areacor',
      en: 'Projects in collaboration with Atelier Areacor',
    },
    about: { pt: 'Sobre', en: 'About' },
    contact: { pt: 'Contactos', en: 'Contact' },
  },
  project: {
    viewProject: { pt: 'Ver Projecto', en: 'View Project' },
    close: { pt: 'Fechar', en: 'Close' },
    plotArea: { pt: 'Área de terreno', en: 'Plot area' },
    builtArea: { pt: 'Área de Construção', en: 'Built area' },
  },
  about: {
    role: { pt: 'Arquitecta', en: 'Architect' },
    bio1: {
      pt: 'Licenciada em Arquitectura pela Universidade Lusíada de Lisboa em 1997.',
      en: 'Graduated in Architecture from Universidade Lusíada de Lisboa in 1997.',
    },
    bio2: {
      pt: 'Tenho desenvolvido projectos próprios, em colaboração com gabinetes de arquitectura e em parcerias com outros arquitectos.',
      en: 'I have developed independent projects, in collaboration with architecture firms and in partnerships with other architects.',
    },
    bio3: {
      pt: 'Com mais de 20 anos de experiência profissional em desenho e gestão de projecto, de diferentes dimensões e complexidade, desde a fase inicial à sua conclusão.',
      en: 'With more than 20 years of professional experience in architectural design and project management, across different scales and complexity, from inception to completion.',
    },
    bio4: {
      pt: 'Possuo uma vasta experiência na coordenação e direcção de projectos, incluindo a preparação de processos para apresentação e aprovação pelas autoridades camarárias.',
      en: 'I have extensive experience in the coordination and management of projects, including the preparation of submissions for municipal approval.',
    },
  },
  contact: {
    address: { pt: 'Morada', en: 'Address' },
    addressValue: {
      pt: 'Edifício LACS · Estrada da Malveira Serra 920\n2750-834 Cascais',
      en: 'Edifício LACS · Estrada da Malveira Serra 920\n2750-834 Cascais, Portugal',
    },
    contacts: { pt: 'Contactos', en: 'Contacts' },
    copyright: { pt: '© 2024 Alexandra Figueira', en: '© 2024 Alexandra Figueira' },
  },
}

export function tx(
  entry: { pt: string; en: string },
  lang: Language,
): string {
  return entry[lang]
}
