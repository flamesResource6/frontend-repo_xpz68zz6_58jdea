import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative bg-slate-950 py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-sm text-red-400 font-semibold tracking-wider">ABOUT</p>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Who I am</h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid items-start gap-10 md:grid-cols-2"
        >
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6">
            <h3 className="text-white font-semibold text-lg">Philosophy</h3>
            <p className="mt-3 text-slate-300 leading-relaxed">
              I obsess over performance, accessibility, and craft. My builds are tuned for speed and reliability like a well-balanced sports car.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6">
            <h3 className="text-white font-semibold text-lg">Stack</h3>
            <p className="mt-3 text-slate-300 leading-relaxed">
              React, FastAPI, Tailwind, MongoDB, Framer Motion, and a healthy respect for clean DX.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
