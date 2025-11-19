import { motion } from 'framer-motion'

const stats = [
  { title: '0–100 Skills', value: '3.2s', desc: 'Ramp from brief to prototype' },
  { title: 'Peak Performance', value: 'A+', desc: 'Accessibility, perf, polish' },
  { title: 'Torque (Experience)', value: '7+ yrs', desc: 'Full‑stack product builds' },
  { title: 'Upgrades', value: 'React • FastAPI • Tailwind • FM', desc: 'Tools I use' },
]

export default function About() {
  return (
    <section id="about" className="relative py-24">
      {/* Alcantara + M stitching background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(15,23,42,0.9),rgba(2,6,23,1))]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 0 2px, transparent 2px 16px)',
            maskImage:
              'radial-gradient(circle at 30% 20%, rgba(0,0,0,0.9), rgba(0,0,0,0.2) 60%, transparent 70%)',
          }}
        />
        {/* subtle suede texture via noise */}
        <div className="absolute inset-0 mix-blend-soft-light opacity-10" style={{ backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-sm font-semibold tracking-wider text-red-400">DRIVER PROFILE</p>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">About</h2>
        </div>

        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Cluster-framed profile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-slate-900/80 to-slate-900/40 p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
              {/* HUD chrome */}
              <div className="absolute left-6 top-6 h-2 w-2 rounded-full bg-red-500 shadow-[0_0_12px_2px_rgba(239,68,68,0.6)]" />
              <div className="absolute right-6 top-6 h-2 w-2 rounded-full bg-blue-500/80 shadow-[0_0_12px_2px_rgba(59,130,246,0.5)]" />
              <div className="rounded-xl border border-white/10 bg-black/40 p-2">
                <img
                  src="https://images.unsplash.com/photo-1541534401786-2077eed87a72?q=80&w=1200&auto=format&fit=crop"
                  alt="Profile"
                  className="h-80 w-full rounded-lg object-cover"
                />
              </div>
              {/* ambient M glow */}
              <div aria-hidden className="pointer-events-none absolute -left-16 bottom-10 h-40 w-40 rounded-full bg-[#0E6FFF]/20 blur-3xl" />
              <div aria-hidden className="pointer-events-none absolute -right-10 top-10 h-32 w-32 rounded-full bg-[#E60026]/20 blur-3xl" />
            </div>
          </motion.div>

          {/* Performance metric cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.title}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-5"
              >
                {/* motion streaks & reflections */}
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute -left-1/4 top-0 h-1 w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 blur-sm group-hover:opacity-100"
                  animate={{ x: ['-20%', '140%'] }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                />
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{s.title}</p>
                <p className="mt-2 text-2xl font-bold text-white">{s.value}</p>
                <p className="mt-1 text-sm text-slate-300">{s.desc}</p>
                <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-red-600/20 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                <div className="pointer-events-none absolute -bottom-12 -left-12 h-28 w-28 rounded-full bg-sky-600/20 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
