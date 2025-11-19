import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const images = [
  'https://images.unsplash.com/photo-1600965962271-09b137dd3e24?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1550355191-280a5b1eb60d?q=80&w=1200&auto=format&fit=crop',
]

export default function Gallery() {
  const [active, setActive] = useState(null)

  return (
    <section id="gallery" className="relative bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold tracking-wider text-red-400">INSIDE THE MACHINE</p>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Gallery / UI Snaps</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((src, i) => (
            <button key={src} onClick={() => setActive(src)} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/50">
              {/* Frame like dashboard screens */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
              <img src={src} alt="BMW themed" className="h-52 w-full object-cover opacity-90 transition group-hover:opacity-100" />
              <div className="pointer-events-none absolute -bottom-10 left-0 right-0 h-20 bg-gradient-to-t from-black/50 to-transparent" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="relative w-[90vw] max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-3"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Ambient lighting like door lights */}
              <div aria-hidden className="pointer-events-none absolute -top-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-red-600/20 blur-3xl" />
              <div className="relative">
                <img src={active} alt="Large" className="max-h-[70vh] w-full object-contain" />
                {/* Subtle engine rumble (visual) */}
                <motion.div
                  aria-hidden
                  className="absolute inset-0"
                  animate={{ filter: ['contrast(1)', 'contrast(1.04)', 'contrast(1)'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
