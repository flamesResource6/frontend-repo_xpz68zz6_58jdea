import { motion } from 'framer-motion'

const skills = [
  { name: 'React', level: 92 },
  { name: 'FastAPI', level: 88 },
  { name: 'Framer Motion', level: 90 },
  { name: 'Tailwind', level: 94 },
  { name: 'MongoDB', level: 82 },
]

export default function Experience() {
  return (
    <section id="experience" className="relative bg-slate-950 py-24">
      {/* Sweeping motion blur divider */}
      <div aria-hidden className="absolute -top-12 left-0 right-0 h-24">
        <div className="mx-auto h-full max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-8">
          <motion.div
            className="h-24 w-[160%] -skew-x-12 rounded-full bg-gradient-to-r from-red-600/0 via-red-600/20 to-transparent blur-3xl"
            animate={{ x: ['-10%', '10%', '-10%'] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold tracking-wider text-red-400">PERFORMANCE STATS</p>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Experience & Skills</h2>
        </div>

        {/* Full-width dashboard */}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6 md:p-10">
          <div className="grid gap-10 md:grid-cols-2">
            {/* Animated bars like RPM needles */}
            <div>
              <h3 className="text-white text-lg font-semibold">Skill Needles</h3>
              <div className="mt-6 space-y-5">
                {skills.map((s, i) => (
                  <div key={s.name}>
                    <div className="mb-2 flex items-center justify-between text-slate-300">
                      <span className="text-sm">{s.name}</span>
                      <span className="text-xs text-slate-400">{s.level}%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        className="h-full origin-left bg-gradient-to-r from-[#0E6FFF] via-[#00ADEF] to-[#E60026]"
                        initial={{ scaleX: 0.2 }}
                        whileInView={{ scaleX: s.level / 100 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', stiffness: 120, damping: 18, delay: i * 0.08 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Power curves */}
            <div>
              <h3 className="text-white text-lg font-semibold">Power Curves</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {['Frontend Peak', 'Backend Torque', 'UX Responsiveness', 'Delivery Cadence'].map((label, i) => (
                  <div key={label} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-slate-300">{label}</p>
                    {/* Stylized curve */}
                    <svg viewBox="0 0 200 80" className="mt-2 h-20 w-full">
                      <defs>
                        <linearGradient id={`grad-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#0E6FFF" />
                          <stop offset="50%" stopColor="#00ADEF" />
                          <stop offset="100%" stopColor="#E60026" />
                        </linearGradient>
                      </defs>
                      <motion.path
                        d="M0 70 C 40 60, 60 10, 100 20 S 160 70, 200 40"
                        fill="none"
                        stroke={`url(#grad-${i})`}
                        strokeWidth="3"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: i * 0.2 }}
                      />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
