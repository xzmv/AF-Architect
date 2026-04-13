export type Language = 'pt' | 'en'

export interface BilingualText {
  pt: string
  en: string
}

export interface ProjectArea {
  labelPt: string
  labelEn: string
  value: string
}

export interface Project {
  id: string
  slug: string
  namePt: string
  nameEn: string
  typePt: string
  typeEn: string
  descriptionPt: string
  descriptionEn: string
  areas: ProjectArea[]
  images: string[]
  category: 'recentes' | 'areacor'
}
