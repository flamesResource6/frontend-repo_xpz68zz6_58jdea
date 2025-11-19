import Spline from '@splinetool/react-spline'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  // Scroll-driven cockpit experience: a pinned 3D scene with staged captions that animate as you scroll
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] })

  // HUD fades out as we transition deeper into the interior
  const hudOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])
  const vignetteOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.4, 0.2, 0.2, 0.5])

  // Ambient parallax accents (M-stripes inspired)
  const parallaxX = useTransform(scrollYProgress, [0, 1], ['0%', '8%'])
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '-6%'])

  // Stage captions (fade between sections)
  const stage1Opacity = useTransform(scrollYProgress, [0.02, 0.12, 0.22], [0, 1, 0])
  const stage1Y = useTransform(scrollYProgress, [0.02, 0.12, 0.22], [20, 0, -20])

  const stage2Opacity = useTransform(scrollYProgress, [0.33, 0.43, 0.53], [0, 1, 0])
  const stage2Y = useTransform(scrollYProgress, [0.33, 0.43, 0.53], [20, 0, -20])

  const stage3Opacity = useTransform(scrollYProgress, [0.64, 0.74, 0.84], [0, 1, 0])
  const stage3Y = useTransform(scrollYProgress, [0.64, 0.74, 0.84], [20, 0, -20])

  // Replace with your interior scene URL for best results
  const interiorSceneUrl = 'https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode'

  return (
    <section id="cockpit" className="relative w-full bg-slate-950">
      {/* 3-scene scroll length */}
      <div ref={containerRef} className="relative h-[300vh] w-full">
        {/* Pinned 3D cockpit */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* 3D Interior (Spline) */}
          <div className="absolute inset-0">
            <Spline scene={interiorSceneUrl} style={{ width: '100%', height: '100%' }} />
          </div>

          {/* Subtle gradient glow + vignette for depth */}
          <motion.div
            className="pointer-events-none absolute inset-0"
            style={{ opacity: vignetteOpacity }}
          >
            <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-red-600/25 blur-3xl" />
            <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-slate-500/20 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(0,0,0,0.6)_100%)]" />
          </motion.div>

          {/* M ambient lighting stripes with slight parallax */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -left-24 top-16 z-0 h-72 w-[140%] -skew-y-6 opacity-35 mix-blend-screen"
            style={{ x: parallaxX, y: parallaxY }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0E6FFF] via-[#00ADEF] to-transparent" />
            <div className="absolute inset-0 -translate-y-2 bg-gradient-to-r from-[#E60026] via-transparent to-transparent opacity-80" />
          </motion.div>

          {/* HUD overlay that eases out as you scroll */}
          <motion.div
            className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8"
            style={{ opacity: hudOpacity }}
          >
            <div className="max-w-xl">
              <p className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-red-500" /> Interior Experience
              </p>
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl md:text-7xl">
                Step inside the cockpit
              </h1>
              <p className="mt-6 max-w-prose text-lg text-slate-300">
                A scroll-driven portfolio that guides you through the M-inspired interior — from the wheel to the console to ambient systems.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#projects" className="rounded-xl bg-gradient-to-br from-red-600 to-red-500 px-6 py-3 font-semibold text-white shadow-lg shadow-red-500/30 ring-1 ring-white/10 transition hover:brightness-110">
                  View Projects
                </a>
                <a href="#contact" className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                  Contact Me
                </a>
              </div>
            </div>
          </motion.div>

          {/* Stage captions that fade in/out as you progress */}
          <div className="pointer-events-none absolute inset-0 z-10">
            <motion.div
              className="absolute left-1/2 top-[20%] w-[90vw] max-w-3xl -translate-x-1/2 text-center"
              style={{ opacity: stage1Opacity, y: stage1Y }}
            >
              <p className="text-sm font-semibold tracking-wider text-red-400">STAGE 01 • DRIVER FOCUS</p>
              <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">Precision UI, race-grade performance</h3>
              <p className="mt-2 text-slate-300">Flat-bottom wheel, paddle shifters, and digital M-cluster come to life.</p>
            </motion.div>

            <motion.div
              className="absolute left-1/2 top-1/2 w-[90vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 text-center"
              style={{ opacity: stage2Opacity, y: stage2Y }}
            >
              <p className="text-sm font-semibold tracking-wider text-red-400">STAGE 02 • CENTER CONSOLE</p>
              <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">Controls engineered for flow</h3>
              <p className="mt-2 text-slate-300">Sculpted M-sport bucket seats, Alcantara textures, contrast stitching.</p>
            </motion.div>

            <motion.div
              className="absolute bottom-[15%] left-1/2 w-[90vw] max-w-3xl -translate-x-1/2 text-center"
              style={{ opacity: stage3Opacity, y: stage3Y }}
            >
              <p className="text-sm font-semibold tracking-wider text-red-400">STAGE 03 • AMBIENT SYSTEMS</p>
              <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">Immersive details that glow</h3>
              <p className="mt-2 text-slate-300">Illuminated M badges, RPM-focused animations, and red–blue ambient light.</p>
            </motion.div>
          </div>

          {/* Speed-style light trails */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {[...Array(4)].map((_, i) => (
              <motion.span
                key={i}
                className="absolute top-[70%] h-0.5 w-32 -skew-x-12 bg-gradient-to-r from-transparent via-red-500/70 to-transparent blur-sm"
                style={{ left: `${-20 + i * 25}%` }}
                animate={{ x: ['-10%', '120%'] }}
                transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: 'easeOut', delay: i * 0.25 }}
              />
            ))}
          </div>

          {/* Scroll cue */}
          <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-center">
            <div className="mx-auto h-10 w-6 rounded-full border border-white/20 p-1">
              <motion.div className="h-2 w-2 rounded-full bg-white/80" animate={{ y: [0, 16, 0], opacity: [1, 0.4, 1] }} transition={{ duration: 1.8, repeat: Infinity }} />
            </div>
            <p className="mt-2 text-xs text-slate-300">Scroll</p>
          </div>
        </div>
      </div>

      {/* Transition gradient into the next sections */}
      <div className="pointer-events-none -mt-1 h-40 w-full bg-gradient-to-b from-transparent to-slate-950" />
    </section>
  )
}
