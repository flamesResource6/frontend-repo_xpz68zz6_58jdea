import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-slate-950">
      {/* Glow gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-red-600/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-slate-500/20 blur-3xl" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-28 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <p className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-red-500" /> Car-themed Portfolio
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white">
            Crafting sleek, high-performance web experiences
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-prose">
            I build fast, modern interfaces and APIs inspired by automotive design: clean lines, powerful performance, and precision engineering.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-xl bg-gradient-to-br from-red-600 to-red-500 px-6 py-3 font-semibold text-white shadow-lg shadow-red-500/30 ring-1 ring-white/10 hover:brightness-110 transition">
              View Projects
            </a>
            <a href="#contact" className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10 transition">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>

      {/* Spline 3D car */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Bottom vignette to enhance contrast */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  )
}
