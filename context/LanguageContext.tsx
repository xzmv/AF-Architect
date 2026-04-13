'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import type { Language } from '@/lib/types'

interface LanguageContextValue {
  lang: Language
  toggle: () => void
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'pt',
  toggle: () => {},
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('pt')

  const toggle = () => setLang((prev) => (prev === 'pt' ? 'en' : 'pt'))

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-PT' : 'en'
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
