'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ImageCarouselProps {
  images: string[]
  alt: string
  priority?: boolean
  aspectRatio?: string
}

export default function ImageCarousel({
  images,
  alt,
  priority = false,
  aspectRatio = 'aspect-[3/2]',
}: ImageCarouselProps) {
  const [current, setCurrent] = useState(0)
  const [hovering, setHovering] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % images.length)
  }, [images.length])

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + images.length) % images.length)
  }, [images.length])

  useEffect(() => {
    if (hovering || images.length <= 1) return
    intervalRef.current = setInterval(next, 4000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [hovering, next, images.length])

  const transition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 1.1, ease: [0.4, 0, 0.2, 1] as const }

  return (
    <div
      className={`relative w-full ${aspectRatio} overflow-hidden bg-bg-alt group`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Images */}
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={transition}
          className="absolute inset-0 z-[1]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[current]}
            alt={`${alt}, foto ${current + 1} de ${images.length}`}
            title={`${alt}, foto ${current + 1} de ${images.length}`}
            className="w-full h-full object-cover"
            loading={priority && current === 0 ? 'eager' : 'lazy'}
          />
        </motion.div>
      </AnimatePresence>

      {/* Arrow buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            aria-label="Imagem anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 bg-bg/80 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200 focus-visible:opacity-100"
          >
            <ChevronLeft size={16} strokeWidth={1.5} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            aria-label="Próxima imagem"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 bg-bg/80 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200 focus-visible:opacity-100"
          >
            <ChevronRight size={16} strokeWidth={1.5} />
          </button>
        </>
      )}

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrent(i) }}
              aria-label={`Ir para imagem ${i + 1}`}
              className={`w-5 h-px transition-all duration-300 ${
                i === current ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
